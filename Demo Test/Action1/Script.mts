SystemUtil.Run("C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe")

'--Đăng nhập
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "5b067a79b206b2b3ba2c"

'check name > 3 kí tự
name = (WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").GetROProperty("text"))
int name_L
name_L = Len(name)

If name_L > 3 Then
	Reporter.ReportEvent micPass, "Check độ dài Username", "Username " & name & " dài "  & name_L & " kí tự"
ElseIf name_L <= 3 Then
	Reporter.ReportEvent micFail, "Check độ dài Username", "Username " & name & " dài "  & name_L & " kí tự"
End If
	
'''''
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click

'---Book Flight
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 4,0
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set DataTable("PassengerName", dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click

wait (5)
'---Lấy thông tin số Order number 
order_mes = (WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 89 completed").GetROProperty("text"))
'MsgBox(order_mes)

b = Replace(order_mes, "Order", "")
'MsgBox b
c = Replace(b, "completed", "")
'MsgBox c

order_num = Trim(c)
'MsgBox order_num

'--Search flight
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("HPE MyFlight Sample Applicatio").WpfRadioButton("byNumberRadio").Set
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("byNumberWatermark").Set order_num
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SEARCH").Click
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Check CheckPoint("passengerName")

'---Close
WpfWindow("HPE MyFlight Sample Applicatio").Close

