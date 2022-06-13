package edu.postech.csed332.homework6;

import com.intellij.openapi.project.Project;
import com.intellij.openapi.wm.ToolWindow;
import com.intellij.openapi.wm.ToolWindowFactory;
import com.intellij.ui.content.Content;
import com.intellij.ui.content.ContentFactory;
import org.jetbrains.annotations.NotNull;

/**
 * A factory to create a Project Structure tool window.
 */
public class MyToolWindowFactory implements ToolWindowFactory {
    @Override
    public void createToolWindowContent(@NotNull Project project, @NotNull ToolWindow toolWindow) {
//        MyToolWindow myToolWindow = new MyToolWindow(toolWindow);
//        ContentFactory contentFactory = ContentFactory.SERVICE.getInstance();
//        Content content = contentFactory.createContent(myToolWindow.getContent(), "", false);
//        toolWindow.getContentManager().addContent(content);
        var psw = new ProjectStructureWindow();
        var contentFactory = ContentFactory.SERVICE.getInstance();
        var content = contentFactory.createContent(psw.getContent(), "", false);
        toolWindow.getContentManager().addContent(content);
    }
}
