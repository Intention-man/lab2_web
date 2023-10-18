<%@ page import="java.util.List" %>
<%@ page import="app.model.OneRes" %>
<%@ page import="app.model.ResultsBean" %><%--
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
    <link rel="stylesheet" type="text/css" href="css/result.css">
    <title>Table</title>
</head>
<body class="common_body">
<% if (ResultsBean.getInstance().getLastHitResValue()) { %>
    <div class="common success_hit_notification">
        <h1>Success!</h1>
        <a href="index.jsp">Back to main</a>
    </div>
<% } else {%>
    <div class="common fail_hit_notification">
        <h1>Fail(</h1>
        <a href="index.jsp">Back to main</a>
    </div>
<%}%>
</body>
</html>