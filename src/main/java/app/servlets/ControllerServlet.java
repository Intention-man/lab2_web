package app.servlets;

import app.model.OneRes;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;



@WebServlet(name = "controllerServlet", value = "/controller")
public class ControllerServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        String id = request.getParameter("id");
//        if(id == null) {

//            String path = req.getContextPath() + "/one_res";
//            resp.sendRedirect(path);
//        }
//        else {
//            response.setContentType("text/html");
//            PrintWriter writer = response.getWriter();
//            try {
//                writer.println("<h2>Hello Id " + id + "</h2>");
//            } finally {
//                writer.close();
//            }
//        }
//
        try{
            int x = Integer.parseInt(req.getParameter("x"));
            float y = Float.parseFloat(req.getParameter("y"));
            float r = Float.parseFloat(req.getParameter("r"));
            OneRes oneRes = new OneRes(x, y, r);
            RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/one_res");
            System.out.println("ControllerServlet.doPost");
            dispatcher.forward(req, resp);
        } catch (Exception exception) {
            resp.getWriter().println(exception.getMessage());
        }




//        resp.getWriter().println("hi");

//        Results instance = Results.getInstance();
//        req.setAttribute("results", instance.getResults());
//        System.out.println("ControllerServlet.doGet");
//        RequestDispatcher requestDispatcher = req.getRequestDispatcher("index.jsp");
//        requestDispatcher.forward(req, resp);
    }

}