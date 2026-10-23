# Google Spreadsheet Setup Guide for Kelvin & Janine's Wedding RSVP

**Spreadsheet Link**:  
[https://docs.google.com/spreadsheets/d/1dtPSnnzNq7jgL1_wSNAWaKzCSJamVyTXdTUeIZ1EbK8/edit](https://docs.google.com/spreadsheets/d/1dtPSnnzNq7jgL1_wSNAWaKzCSJamVyTXdTUeIZ1EbK8/edit)

---

### Step 1: Open Apps Script in Your Spreadsheet
1. Open your spreadsheet above in your browser.
2. In the top menu, click **Extensions** > **Apps Script**.

---

### Step 2: Paste the Integration Script
Replace any default code in the editor with this script:

```javascript
// Google Apps Script for Kelvin & Janine Wedding RSVP
// Automatically formats columns and appends confirmed attendees

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-setup headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      setupSheetHeaders(sheet);
    }
    
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" });
    
    var name = data.name || "Anonymous";
    var attending = data.attending || "Attending";
    var guests = attending.indexOf("Declining") !== -1 ? 0 : (data.guests || 1);
    var phone = data.phone || "N/A";
    
    sheet.appendRow([
      timestamp,
      name,
      attending,
      guests,
      phone
    ]);
    
    // Format status cell (Green for Attending, Wine Red for Declining)
    var lastRow = sheet.getLastRow();
    var statusCell = sheet.getRange(lastRow, 3);
    if (attending.indexOf("Attending") !== -1) {
      statusCell.setFontColor("#155724")
                .setBackground("#d4edda")
                .setFontWeight("bold")
                .setHorizontalAlignment("center");
    } else {
      statusCell.setFontColor("#721c24")
                .setBackground("#f8d7da")
                .setFontWeight("bold")
                .setHorizontalAlignment("center");
    }

    // Center-align seats count
    sheet.getRange(lastRow, 4).setHorizontalAlignment("center");

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Initial Header Setup Function (Sets colors, column widths, and freezes header row)
function setupSheetHeaders(sheet) {
  var headers = [
    "Timestamp (PHT)",
    "Guest Name(s)",
    "Attendance Status",
    "Seats Reserved",
    "Mobile / WhatsApp"
  ];
  sheet.appendRow(headers);
  
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground("#783832")
             .setFontColor("#FFFFFF")
             .setFontWeight("bold")
             .setFontSize(11)
             .setHorizontalAlignment("center");
  
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 180);
  sheet.setColumnWidth(2, 240);
  sheet.setColumnWidth(3, 180);
  sheet.setColumnWidth(4, 140);
  sheet.setColumnWidth(5, 180);
}
```

---

### Step 3: Deploy as a Web App
1. Click the blue **Deploy** button at the top right > select **New deployment**.
2. Click the gear icon next to "Select type" > select **Web app**.
3. Fill in:
   - **Description**: `Wedding RSVP Webhook`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial so the website can submit responses without needing a login)*
4. Click **Deploy**.
5. Grant permissions if prompted.
6. Copy the **Web App URL** (starts with `https://script.google.com/macros/s/.../exec`).

---

### Step 4: Paste URL into Your Website
1. Open `.env.local` in `wedding-invitation/`:
   ```bash
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
2. If deployed on Vercel, also add `GOOGLE_SCRIPT_URL` to **Vercel Project Settings > Environment Variables**.

That's it! Every guest who submits their RSVP will now automatically appear in your spreadsheet, beautifully formatted and ready for attendance analysis!
