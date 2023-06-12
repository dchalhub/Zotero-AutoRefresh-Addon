# Zotero Addon "AutoRefresh"
AutoRefresh is a convenient Zotero addon that allows users to update item information/metadata directly from the DOI/ISBN online databases. It also provides a convenient way to delete PDFs of selected items.


## Disclaimer
The "AutoRefresh" Zotero Addon was developed by Daniel Chalhub as a personal side project. It is important to note that the developer does not intend to provide continued support or actively maintain/update the plugin. While there is a possibility of occasional updates, it cannot be guaranteed. The addon was primarily developed to fulfill personal needs within the Zotero workflow.

## Contributions
Other developers are welcome to contribute to the "AutoRefresh" addon. If you encounter any issues or have suggestions for improvements, you can submit them through GitHub. However, please be aware that the developer's ability to address these issues or merge contributions may be limited.

## Installation

To install the "AutoRefresh" Zotero Addon, follow these steps:

1. Download the addon package (.xpi) from the [builds directory](/builds) of the repository.
2. Open Zotero, go to "Tools" in the menu bar, and select "Add-ons."
3. In the Add-ons Manager, click the gear icon and choose "Install Add-on From File."
4. Locate the downloaded addon package (.xpi file) on your computer and select it.
5. Click "Install" to add the addon to Zotero.
6. Restart Zotero
7. Go back to "Tools" in the menu bar, and select "Add-ons". After successful installation, you should see the "AutoRefresh" addon listed in the Add-ons Manager of Zotero. 
8. You can now access its features as described in the [Usage](#usage) section of this documentation.

Please note that the addon package is provided in the "builds" directory of the repository.

## Usage

The AutoRefresh addon for Zotero offers a user-friendly and intuitive experience. All the necessary functionalities can be accessed conveniently through the context menu, which is available by simply right-clicking anywhere within the Zotero window. 

The 'Archive' field plays a temporary role in the AutoRefresh addon, serving to indicate the refresh status of items. It utilizes symbols such as [🔄] for refreshing, [✔️] for refreshed, and [❌] for items that could not be refreshed. To conveniently monitor the status of items, it is recommended to enable the 'Archive' field on the list interface. This will provide a clear and accessible view of the item's refresh status. Rest assured, once the refresh process is complete, you can effortlessly remove the symbols inserted in the 'Archive' field. This can be done by accessing the context menu and selecting the option "Clear all AutoRefresh Tags (🔄 ✔️ ❌) from 'Archive' Field". This convenient feature ensures that you can easily clear the temporary symbols from the 'Archive' field, maintaining a clean and organized view of your items.

There are basically 3 AutoRefresh context-menu options:


### 1. Update Information Using Identifier (DOI/ISBN)

- Select the desired items in Zotero.
- Right-click on the selected items to open the context menu.
- Choose the "Update information Using Identifier (DOI/ISBN)" option.
- A confirmation alert will appear, asking if you want to proceed with the update.
- If confirmed, the addon will attempt to update the item information based on the DOI/ISBN.
- AutoRefresh tags (🔄 ✔️ ❌) will be inserted into the 'Archive' field to indicate the update status.
- Check the 'Archive' field to verify which items were successfully updated.

### 2. Clear all AutoRefresh Tags (🔄 ✔️ ❌) from 'Archive' Field

- Right-click anywhere in Zotero's main interface to open the context menu.
- Choose the "Clear all AutoRefresh Tags (🔄 ✔️ ❌) from 'Archive' field" option.
- A confirmation alert will appear, asking if you want to proceed with the tag removal.
- If confirmed, the addon will remove all AutoRefresh tags from the 'Archive' field of all items.
- This action will clear any indication of the update status.

### 3. Delete Only PDFs

- Select the desired items in Zotero.
- Right-click on the selected items to open the context menu.
- Choose the "Delete Only PDFs" option.
- A confirmation alert will appear, asking if you want to proceed with the PDF deletion.
- If confirmed, the addon will delete the PDF attachments of the selected items.
- Note that this action only deletes the PDF attachments and does not remove the items themselves.

## Important Notes

- The "AutoRefresh" addon is specifically designed for Zotero and works within the Zotero interface.
- It is highly recommended to back up your Zotero library before performing bulk updates or deletions.
- Use the addon at your own risk, as it might have bugs or unforeseen issues.
- The developer does not provide ongoing support or guarantee the resolution of reported issues.

## Support

As the developer does not actively maintain the "AutoRefresher" addon, there may be limited support available. For any questions or concerns, you can refer to the addon's GitHub repository and issue tracker.

We hope the "AutoRefresher" addon proves useful to you. Remember to exercise caution and take responsibility for your own usage and any potential risks involved.

