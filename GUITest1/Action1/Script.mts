'SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe --incognito",  "https://qlnh.vnpt.vn/staff"
SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe", " -incognito " & "https://qlnh.vnpt.vn/staff"

Browser("Cloud Restaurant").Page("Cloud Restaurant").WebEdit("RestaurantCode").Set "erestaurant" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Cloud Restaurant").Page("Cloud Restaurant").WebEdit("Username").Set "manager " @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Cloud Restaurant").Page("Cloud Restaurant").WebEdit("Password").Set  "123123aA@" 'Secure "5fec2b6678c2001a65e74046d221fa7ec6ac9fb9accc" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Cloud Restaurant").Page("Cloud Restaurant").WebButton("Đăng nhập").Click @@ script infofile_;_ZIP::ssf4.xml_;_

Browser("Cloud Restaurant").Page("Staff").WebElement("Danh sách bàn").Click
Browser("Cloud Restaurant").Page("Staff_2").WebElement("Bàn 14").Click
Browser("Cloud Restaurant").CloseAllTabs


