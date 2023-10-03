<%@ page import="java.util.List" %>
<%@ page import="app.model.OneRes" %>
<%@ page import="app.model.Results" %><%--
  Created by IntelliJ IDEA.
  User: Михаил
  Date: 25.09.2023
  Time: 9:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/table.css">
    <title>Table</title>
</head>
<body>

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
    </tbody>

</table>
<a href="index.jsp">Back to main</a>
</body>
</html>