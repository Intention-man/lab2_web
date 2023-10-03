package app.servlets;

import app.model.OneRes;
import app.model.Results;
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
//        try {

//        PrintWriter out = resp.getWriter();
//        out.println("<html><body>");
//        out.println("<h1>" + "message" + "</h1>");
//        out.println("</body></html>");

        int x = Integer.parseInt(req.getParameter("x"));
        float y = Float.parseFloat(req.getParameter("y"));
        float r = Float.parseFloat(req.getParameter("r"));

        OneRes oneRes = new OneRes();
        oneRes.setX(x);
        oneRes.setY(y);
        oneRes.setR(r);
        oneRes.setInside();
        Results instance = Results.getInstance();
        instance.add(oneRes);

        /**** Storing Bean In Session ****/
//        req.getSession().setAttribute("res", oneRes);

//        HttpSession session = req.getSession();
//        List<OneRes> resList = (List<OneRes>) session.getAttribute("resList");
//        if (resList == null) {
//            resList = new ArrayList<>();
//            session.setAttribute("resList", resList);
//        }
//
//        // Добавьте объект данных в список
//        resList.add(oneRes);



        RequestDispatcher rd = req.getRequestDispatcher("/result");
        rd.forward(req, resp);

    }
}