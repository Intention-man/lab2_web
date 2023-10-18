package app.servlets;

import app.model.OneRes;
import app.model.ResultsBean;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;


@WebServlet(name = "oneResServlet", value = "/one_res")
public class AreaCheckServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try{
            int x = Integer.parseInt(req.getParameter("x"));
            float y = Float.parseFloat(req.getParameter("y"));
            float r = Float.parseFloat(req.getParameter("r"));
            RequestDispatcher dispatcher;
            if (Math.abs(x) <= 4 && y > -3 && y < 3 && r > 2 && r < 5) {
                OneRes oneRes = new OneRes();
                oneRes.setX(x);
                oneRes.setY(y);
                oneRes.setR(r);
                oneRes.setInside();
                ResultsBean instance = ResultsBean.getInstance();
                instance.add(oneRes);
                instance.setLastHitResValue(oneRes.isInside());
                dispatcher = req.getRequestDispatcher("/result");
            } else {
                dispatcher = getServletContext().getRequestDispatcher("/incorrect-data");
            }
            dispatcher.forward(req, resp);
        } catch (Exception exception) {
            resp.getWriter().println(exception.getMessage());
        }
    }
}