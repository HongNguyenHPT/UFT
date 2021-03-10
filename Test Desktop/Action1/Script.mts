Reporter.ReportEvent micFail, "check order", "order fail" @@ hightlight id_;_2109463800_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2109463800_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "6038a783f24988f2ac55" @@ hightlight id_;_2109473880_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2109474264_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2126880776_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 4,1 @@ hightlight id_;_2126874776_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2108405816_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "hgfj" @@ hightlight id_;_2109474936_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2108408648_;_script infofile_;_ZIP::ssf14.xml_;_
'WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 87 completed").Click 99,15 @@ hightlight id_;_2108774336_;_script infofile_;_ZIP::ssf16.xml_;_
wait 5
Reporter.ReportEvent micFail, "check order1", "order fail1"
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 87 completed").Output CheckPoint("Order 87 completed") @@ hightlight id_;_2108776760_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_596398_;_script infofile_;_ZIP::ssf18.xml_;_
