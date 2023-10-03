<%@ page import="java.util.List" %>
<%@ page import="app.model.OneRes" %>
<%@ page import="app.model.Results" %><%--
  Created by IntelliJ IDEA.
  User: Михаил
  Date: 25.09.2023
  Time: 9:42
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/table.css">
    <title>Table</title>
</head>
<body>


<%--<div style="text-align: center;">--%>
<%--    <h2>Java Bean In Servlet 3.0</h2>--%>
<%--    <c:choose>--%>
<%--        <c:when test="${empty res}">--%>
<%--            <h3>Currently, there are no employees.</h3>--%>
<%--        </c:when>--%>
<%--        <c:otherwise>--%>
<%--            <table id="beanTable">--%>
<%--                <tr>--%>
<%--                    <td>X:</td><td>${res.x}</td>--%>
<%--                </tr>--%>
<%--                <tr>--%>
<%--                    <td>Y:</td><td>${res.y}</td>--%>
<%--                </tr>--%>
<%--                <tr>--%>
<%--                    <td>R:</td><td>${res.r}</td>--%>
<%--                </tr>--%>
<%--                <tr>--%>
<%--                    <td>Is inside:</td><td>${res.isInside}</td>--%>
<%--                </tr>--%>
<%--            </table>--%>
<%--        </c:otherwise>--%>
<%--    </c:choose>--%>
<%--</div>--%>

<table>
    <thead>
    <tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Result</th>
    </tr>
    </thead>
    <tbody>
    <% for (OneRes oneRes : Results.getInstance().getResults()) { %>
    <tr>
        <td>
            <%=oneRes.getX()%>
        </td>

        <td>
            <%=oneRes.getY()%>
        </td>

        <td>
            <%=oneRes.getR()%>
        </td>

        <td>
            <%= oneRes.isInside() ? "&#10004" : "&#10008"%>
        </td>
    </tr>
    <% } %>
<%--    <c:forEach items="${sessionScope.resList}" var="res">--%>
<%--        <tr>--%>
<%--            <td>--%>
<%--                    ${res["x"]}--%>
<%--            </td>--%>
<%--            <td>--%>
<%--                    ${res["y"]}--%>
<%--            </td>--%>
<%--            <td>--%>
<%--                    ${res["r"]}--%>
<%--            </td>--%>
<%--            <td>--%>
<%--                    ${res.inside ? "&#10004" : "&#10008"}--%>
<%--            </td>--%>
<%--        </tr>--%>
<%--    </c:forEach>--%>
    </tbody>

</table>
<a href="index.jsp">Back to main</a>
</body>
</html>
