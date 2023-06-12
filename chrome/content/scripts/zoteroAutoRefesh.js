Zotero.AutoRefesh = {
	

	selectedItemsUpdateInfo: async function() {
	

    var userResponse = confirm("Are you sure you want to update the information directly from the DOI/ISBN of the selected items? \n\n"+
    "AutoRefresh tags (🔄 ✔️ ❌) will be inserted into the 'Archive' field to indicate which items were successfully updated. \n" +
    "After the items are updated, you can remove these tags by selecting the 'Clear all AutoRefresh Tags (🔄 ✔️ ❌) from 'Archive' field' option in the context menu. \n\n"+
    "Do you want to proceed and update the information directly from the DOI/ISBN?");
    if (userResponse == true) {
var counter=0;
// Show a corner notification
//ZoteroPane.display("In progress", "Updating info of selected items.");

// Get the selected items in Zotero
var items = Zotero.getActiveZoteroPane().getSelectedItems();

for (let item of items) {
  // Get the current title of the item
  let currentTitle = item.getField('archive');
  
  // Remove the ( ⟳ ) ( ✔ ) ( ✘ ) 🔄 ✔️ ❌ 
  let cleanTitle1 = currentTitle.replace('[🔄]', '');
  let cleanTitle2 = cleanTitle1.replace('[✔️]', '');
  let cleanTitle  = cleanTitle2.replace('[❌]', '');
  
  // Add the "[[UPDATED]]" string to the beginning of the title
  let updatedTitle = '[🔄]' + cleanTitle;
  
  // Set the updated title for the item
  item.setField('archive', updatedTitle);
  
  // Save the changes to the item
  item.saveTx();
    
}





// Loop for journalArticle through each selected item
for (let item of items) {
    counter=counter+1;
    var pass=0;
    let itemTypeID = item.itemTypeID;
    let itemType = Zotero.ItemTypes.getName(itemTypeID);
  
    //alert(itemType)
    





  // Check if the item's itemType is "journalArticle"
  if (itemType === 'journalArticle') 
  {
  try{
  // Create an identifier object with the item's DOI
  let identifier = {
    itemType: "journalArticle",
    DOI: item.getField('DOI')
  };

  // Create a Zotero Translate object to search for the item using the identifier
  var translate = new Zotero.Translate.Search();
  translate.setIdentifier(identifier);

  // Get the available translators for the search
  let translators = await translate.getTranslators();

  // Set the translators for the search
  translate.setTranslator(translators);

  // Perform the translation to get the updated items
  let newItems = await translate.translate();

  // Get the first updated item
  let newItem = newItems[0];

  // Function to update a field in the item if it exists in the updated item
  function update(field) {
    if (newItem.getField(field)) {
      item.setField(field, newItem.getField(field));
    }
  }

  // Set the creators of the item to match the updated item's creators
  item.setCreators(newItem.getCreators());

  // List of fields to update in the item - journalArticle
  let fields = [
    "title", "publicationTitle", "journalAbbreviation", "volume",
    "issue", "date", "pages", "issue", "ISSN", "url", "abstractNote"
  ];

  // Loop through the fields and update them if they exist in the updated item
  for (let field of fields) {
    update(field);
  }

  // Set the updated item as deleted
  newItem.deleted = true;

  // Save the changes to both the original and updated items
  item.saveTx();
  await newItem.saveTx();
  
  
  // Get the current title of the item
  let currentTitle = item.getField('archive');
  
  let cleanTitle1 = currentTitle.replace('[🔄]', '');
  let cleanTitle2 = cleanTitle1.replace('[✔️]', '');
  let cleanTitle  = cleanTitle2.replace('[❌]', '');
  // Add the "[[UPDATED]]" string to the beginning of the title
  let updatedTitle = '[✔️]'+ cleanTitle;
  
  // Set the updated title for the item
  item.setField('archive', updatedTitle);
  
  // Save the changes to the item
  item.saveTx();
  
  pass=1;
  
  }
  catch
  {

  // Get the current title of the item
  let currentTitle = item.getField('archive');
  
  let cleanTitle1 = currentTitle.replace('[🔄]', '');
  let cleanTitle2 = cleanTitle1.replace('[✔️]', '');
  let cleanTitle  = cleanTitle2.replace('[❌]', '');
  
  // Add the "[[UPDATED]]" string to the beginning of the title
  let updatedTitle = '[❌]' + cleanTitle;
  
  // Set the updated title for the item
  item.setField('archive', updatedTitle);
  
  // Save the changes to the item
  item.saveTx();
  }


}//endif-Article






if (itemType === 'book') 
  {
  try{
  // Create an identifier object with the item's DOI
  let identifier = {
    itemType: "book",
    ISBN: item.getField('ISBN')
  };

  // Create a Zotero Translate object to search for the item using the identifier
  var translate = new Zotero.Translate.Search();
  translate.setIdentifier(identifier);

  // Get the available translators for the search
  let translators = await translate.getTranslators();

  // Set the translators for the search
  translate.setTranslator(translators);

  // Perform the translation to get the updated items
  let newItems = await translate.translate();

  // Get the first updated item
  let newItem = newItems[0];

  // Function to update a field in the item if it exists in the updated item
  function update(field) {
    if (newItem.getField(field)) {
      item.setField(field, newItem.getField(field));
    }
  }

  // Set the creators of the item to match the updated item's creators
  item.setCreators(newItem.getCreators());

  // List of fields to update in the item - book
  let fields = [
     "title", "date", "publisher", "place", "numPages", "edition", "volume",
     "ISBN", "url", "abstractNote"
  ];

  // Loop through the fields and update them if they exist in the updated item
  for (let field of fields) {
    update(field);
  }

  // Set the updated item as deleted
  newItem.deleted = true;

  // Save the changes to both the original and updated items
  item.saveTx();
  await newItem.saveTx();
  
  // Get the current title of the item
  let currentTitle = item.getField('archive');
  
  let cleanTitle1 = currentTitle.replace('[🔄]', '');
  let cleanTitle2 = cleanTitle1.replace('[✔️]', '');
  let cleanTitle  = cleanTitle2.replace('[❌]', '');
  // Add the "[[UPDATED]]" string to the beginning of the title
  let updatedTitle = '[✔️]'+ cleanTitle;
  
  // Set the updated title for the item
  item.setField('archive', updatedTitle);
  
  // Save the changes to the item
  item.saveTx();
  
  pass=1;
  }
  catch
  {

  // Get the current title of the item
  let currentTitle = item.getField('archive');
  
  let cleanTitle1 = currentTitle.replace('[🔄]', '');
  let cleanTitle2 = cleanTitle1.replace('[✔️]', '');
  let cleanTitle  = cleanTitle2.replace('[❌]', '');
  
  // Add the "[[UPDATED]]" string to the beginning of the title
  let updatedTitle = '[❌]'+ cleanTitle;
  
  // Set the updated title for the item
  item.setField('archive', updatedTitle);
  
  // Save the changes to the item
  item.saveTx();
  }
  
}//endif-book






if (itemType === 'conferencePaper') 
  {
   try{
  // Create an identifier object with the item's DOI
  let identifier = {
    itemType: "conferencePaper",
    DOI: item.getField('DOI')
  };

  // Create a Zotero Translate object to search for the item using the identifier
  var translate = new Zotero.Translate.Search();
  translate.setIdentifier(identifier);

  // Get the available translators for the search
  let translators = await translate.getTranslators();

  // Set the translators for the search
  translate.setTranslator(translators);

  // Perform the translation to get the updated items
  let newItems = await translate.translate();

  // Get the first updated item
  let newItem = newItems[0];

  // Function to update a field in the item if it exists in the updated item
  function update(field) {
    if (newItem.getField(field)) {
      item.setField(field, newItem.getField(field));
    }
  }

  // Set the creators of the item to match the updated item's creators
  item.setCreators(newItem.getCreators());

  // List of fields to update in the item - conferencePaper
  let fields = [
     "title", "date", "conferenceName", "bookTitle", "publisher",
  "place", "pages", "ISBN", "url", "abstractNote"
  ];

  // Loop through the fields and update them if they exist in the updated item
  for (let field of fields) {
    update(field);
  }

  // Set the updated item as deleted
  newItem.deleted = true;

  // Save the changes to both the original and updated items
  item.saveTx();
  await newItem.saveTx();
  
  
  // Get the current title of the item
  let currentTitle = item.getField('archive');
  
  let cleanTitle1 = currentTitle.replace('[🔄]', '');
  let cleanTitle2 = cleanTitle1.replace('[✔️]', '');
  let cleanTitle  = cleanTitle2.replace('[❌]', '');
  // Add the "[[UPDATED]]" string to the beginning of the title
  let updatedTitle = '[✔️]' + cleanTitle;
  
  // Set the updated title for the item
  item.setField('archive', updatedTitle);
  
  // Save the changes to the item
  item.saveTx();
  

  pass=1;
   }
  catch
  {

  // Get the current title of the item
  let currentTitle = item.getField('archive');
  
  let cleanTitle1 = currentTitle.replace('[🔄]', '');
  let cleanTitle2 = cleanTitle1.replace('[✔️]', '');
  let cleanTitle  = cleanTitle2.replace('[❌]', '');
  
  // Add the "[[UPDATED]]" string to the beginning of the title
  let updatedTitle = '[❌]' + cleanTitle;
  
  // Set the updated title for the item
  item.setField('archive', updatedTitle);
  
  // Save the changes to the item
  item.saveTx();
  }
}//endif-inproceedings







//Check if item is not journal article, paper article or book
if (pass===0)
{
    

    // Get the current title of the item
  let currentTitle = item.getField('archive');
  
  let cleanTitle1 = currentTitle.replace('[🔄]', '');
  let cleanTitle2 = cleanTitle1.replace('[✔️]', '');
  let cleanTitle  = cleanTitle2.replace('[❌]', '');
  
  // Add the "[[UPDATED]]" string to the beginning of the title
  let updatedTitle = '[❌]' + cleanTitle;
  
  // Set the updated title for the item
  item.setField('archive', updatedTitle);
  
  // Save the changes to the item
  item.saveTx();
}//endif pass===0
    

    
    
}//endif for loop


 // Show a corner notification
 //ZoteroPane.displayErrorMessage("Done!", "All info updated");
 alert("The information update algorithm has completed successfully. \n\n" +
 "To confirm which items were actually updated, please check the inserted tags in the 'Archive' field. The AutoRefresh tags (🔄 ✔️ ❌) will indicate the status of each item. \n\n"+
 "You can remove the tags by selecting the 'Clear all AutoRefresh Tags (🔄 ✔️ ❌) from 'Archive' field' option in the context menu.");
    }
// Return a success message
return "Success!";
	


	},
  allItemsClearTags: async function() {

    var userResponse = confirm("Are you sure you want to clear all AutoRefresh tags (🔄 ✔️ ❌) from the 'Archive' field of all items?" );
    if (userResponse == true) {
// Get the current library ID
let libraryID = Zotero.Libraries.userLibraryID;

// Get all database items for the specified library
let items = await Zotero.Items.getAll(libraryID);

// Loop through each item
for (let item of items) {
  // Get the current value of the archive field
  let archive = item.getField('archive');
  
  // Check if the archive field contains the strings to be removed
  if (archive && (archive.includes('[🔄]') || archive.includes('[✔️]') || archive.includes('[❌]'))) {
    // Remove the strings from the archive field
    archive = archive.replace('[🔄]', '').replace('[✔️]', '').replace('[❌]', '');
    archive = archive.replace('[🔄]', '').replace('[✔️]', '').replace('[❌]', '');
    archive = archive.replace('[🔄]', '').replace('[✔️]', '').replace('[❌]', '');
    archive = archive.replace('[🔄]', '').replace('[✔️]', '').replace('[❌]', '');
    archive = archive.replace('[🔄]', '').replace('[✔️]', '').replace('[❌]', '');
    
    // Set the updated value back to the archive field
    item.setField('archive', archive);
    
    // Save the changes to the item
    item.saveTx();
  }
}
alert("AutoRefresh tags cleared.");
}

},
	selectedItemsDeletePDF: async function() {

    var userResponse = confirm("Are you sure you want to delete the PDFs of the selected items?");
    if (userResponse == true) {
// Show a corner notification
// ZoteroPane.displayErrorMessage("In progress", "Deleting PDFs of selected items.");
// Get the selected items in Zotero
var items = Zotero.getActiveZoteroPane().getSelectedItems();

// Loop through each selected item
for (let item of items) {

  // Check if the item is a regular item (as opposed to a note or attachment)
  if (item.isRegularItem()) {

    // Get all child items of this item (attachments and notes)
    let childItems = item.getAttachments();

    // Loop through each child item
    for (let childItemID of childItems) {

      // Fetch the actual child item record
      let childItem = await Zotero.Items.getAsync(childItemID);

      // Check if the child item is a PDF attachment
      if (childItem.attachmentContentType === 'application/pdf') {

        // Delete the PDF attachment
        await childItem.eraseTx();
      }
    }
  }
}

 // Show a corner notification
 //ZoteroPane.displayErrorMessage("Done!", "PDFs deleted");
 alert('PDFs Deleted');
    }
// Return a success message
return "Success!";
		
	}
};

window.addEventListener('load', function(e) {
  Zotero.AutoRefesh.init();
}, false);
