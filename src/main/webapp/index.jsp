<%@ page import="app.model.OneRes" %>
<%@ page import="app.model.Results" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/main.css">
  <link rel="stylesheet" type="text/css" href="css/table.css">
  <link rel="stylesheet" type="text/css" href="css/canvas.css">
  <script type="text/javascript" src="js/validate.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
  <title>Lab 2 on Web</title>
</head>
<body>
<div class="container">
  <header>
    <p>Вариант 1745</p>
    <p>Агей Михаил Александрович</p>
    <p>P3217</p>
  </header>
  <div class="image-container">
    <img src="img/lab2_web_chart.png" id="image"/>
  </div>
  <script type="text/javascript" src="js/drawChart.js"></script>


  <form id="form" method="GET" action="${pageContext.request.contextPath}/controller">
    <div>
      <label>Value R &isin; (2; 5)</label>
      <input type="text" maxlength="8" name="r" onchange="setSendAvailability()" />
    </div>
    <div>
      <label for="x_checkbox">Value X &isin; [-4; 4]</label>
      <div id="x_checkbox">
        <script type="text/javascript" src="js/checkboxDisplay.js"></script>
      </div>
    </div>
    <div>

      <label>Value Y &isin; (-3; 3)</label>
      <input type="text" name="y" onchange="setSendAvailability()"/>
    </div>
    <input id="send_button" type="submit" value="Check the hit" disabled/>

    <script type="text/javascript" src="js/setDate.js"></script>
  </form>
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
</div>
</body>
</html>