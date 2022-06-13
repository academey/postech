package edu.postech.csed332.homework6;

import com.intellij.ide.projectView.impl.nodes.PackageUtil;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.roots.ProjectRootManager;
import com.intellij.psi.*;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.DefaultTreeModel;
import javax.swing.tree.TreeModel;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

class ProjectTreeModelFactory {

    /**
     * Create a tree model that describes the structure of a java project. This method use JavaElementVisitor to
     * traverse the Java hierarchy of each root package in the source directory, and to create a tree. Each node is an
     * instance of {@link DefaultMutableTreeNode} that can have a user object. The user object of root is the project
     * itself, and other nodes have corresponding instances of PsiPackage, PsiClass, PsiMethod, and PsiField.
     *
     * @param project a project
     * @return a tree model to describe the structure of project
     */
    public static TreeModel createProjectTreeModel(Project project) {
        // the root node of the tree
        final var root = new DefaultMutableTreeNode(project);

        // The visitor to traverse the Java hierarchy and to construct the tree
        final var visitor = new JavaElementVisitor() {
            // TODO: add member variables if necessary
            DefaultMutableTreeNode parent = root;
            @Override
            public void visitPackage(PsiPackage pack) {
                // TODO: add a new node to the parent node, and traverse the content of the package
                if (pack.getName().equals("META-INF")) return;
//                System.out.println("******************************");
//                System.out.println(pack.getParentPackage().toString());
                System.out.println("Package : " + pack.getName() + "   -----   Parent : " + parent.toString());
                DefaultMutableTreeNode node = new DefaultMutableTreeNode(pack.getQualifiedName());
                node.setUserObject(pack);
                parent.add(node);

                for (PsiPackage pkg : pack.getSubPackages()) {
                    parent = node;
                    pkg.accept(this);
                }

                for (PsiClass cls : pack.getClasses()) {
                    parent = node;
                    cls.accept(this);
                }

                parent = root;

            }

            @Override
            public void visitClass(PsiClass aClass) {
                // TODO: add a new node the parent node, and traverse the content of the class
                // TODO: add a new node the parent node, and traverse the content of the class
                System.out.println("Class : " + aClass.getName() + "   -----   Parent : " + parent.toString());

                DefaultMutableTreeNode node = new DefaultMutableTreeNode(aClass.getQualifiedName());
                node.setUserObject(aClass);
                parent.add(node);

                for (PsiField fld : aClass.getFields()) {
                    parent = node;
                    fld.accept(this);
                }

                for (PsiMethod mtd : aClass.getMethods()) {
                    parent = node;
                    mtd.accept(this);
                }
            }

            @Override
            public void visitMethod(PsiMethod method) {
                // TODO: add a new node to the parent node
                System.out.println("Method : " + method.getName() + "   -----   Parent : " + parent.toString());
                DefaultMutableTreeNode node = new DefaultMutableTreeNode(method.getName());
                node.setUserObject(method);
                parent.add(node);
            }

            @Override
            public void visitField(PsiField field) {
                // TODO: add a new node to the parent node
                System.out.println("Field : " + field.getName() + "   -----   Parent : " + parent.toString());
                DefaultMutableTreeNode node = new DefaultMutableTreeNode(field.getName());
                node.setUserObject(field);
                parent.add(node);
            }
        };

        // apply the visitor for each root package in the source directory
        getRootPackages(project).forEach(aPackage -> aPackage.accept(visitor));
        return new DefaultTreeModel(root);
    }

    /**
     * Returns the root package(s) in the source directory of a project. The default package will not be considered, as
     * it includes all Java classes. Note that classes in the default package (i.e., having no package statement) will
     * be ignored for this assignment. To be completed, this case must be separately handled.
     *
     * @param project a project
     * @return a set of root packages
     */
    private static Set<PsiPackage> getRootPackages(Project project) {
        final Set<PsiPackage> rootPackages = new HashSet<>();
        var visitor = new PsiElementVisitor() {
            @Override
            public void visitDirectory(@NotNull PsiDirectory dir) {
                final var psiPackage = JavaDirectoryService.getInstance().getPackage(dir);
                if (psiPackage != null && !PackageUtil.isPackageDefault(psiPackage))
                    rootPackages.add(psiPackage);
                else
                    Arrays.stream(dir.getSubdirectories()).forEach(sd -> sd.accept(this));
            }
        };

        var rootManager = ProjectRootManager.getInstance(project);
        var psiManager = PsiManager.getInstance(project);
        Arrays.stream(rootManager.getContentSourceRoots())
                .map(psiManager::findDirectory)
                .filter(Objects::nonNull)
                .forEach(dir -> dir.accept(visitor));

        return rootPackages;
    }
}

