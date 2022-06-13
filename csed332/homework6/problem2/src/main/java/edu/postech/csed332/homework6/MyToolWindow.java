package edu.postech.csed332.homework6;

import com.intellij.openapi.wm.ToolWindow;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Calendar;

public class MyToolWindow {
    private boolean isRed;

    private JButton toggleButton;
    private JLabel label;
    private JPanel myToolWindowContent;

    public MyToolWindow(ToolWindow toolWindow) {
        myToolWindowContent = new JPanel(new GridBagLayout());
        label = new JLabel("CSED332");
        label.setForeground(Color.RED);
        toggleButton = new JButton("Toggle color");
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.gridy = 0;
        myToolWindowContent.add(label, gbc);
        gbc.gridy = 1;
        myToolWindowContent.add(toggleButton, gbc);
        toggleButton.addActionListener(actionEvent -> toggleColor());
    }

    public JPanel getContent() {
        return myToolWindowContent;
    }

    private void toggleColor() {
        if (isRed) {
            label.setForeground(Color.BLUE);
            isRed = false;
        } else {
            label.setForeground(Color.RED);
            isRed = true;
        }
    }
}
