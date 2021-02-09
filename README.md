# BOM-List with clickable Pictures
Electronic Schematics list with "Bill of Materials", with (manually) inserted pictures, made clickable.

To create a BOM-List, each CAD-Program has its own Output-format, mostly (text-)CSS-format, although
it's also possible to use item-lists in a HTML-File. Advantages: Readable in each Browser and using
also images, inserted in a one-file only (not as usually spreaded over the internet)...

For this I used the ability (known from E-Mails in eml-file-format (MIME) to insert pictures in this
Base64-format **inside** one html-file. This format uses 64 characters of the ASCII-table, so
beeing typeable and "printable" (on printer and on screen), used also inserting images or symbols in
any html-file.

To create a HTML-(BOM-)file for that purpose, I modified a Eagle .ulp-script to be able to generate
a html-file with a table-cell at the begin of each row, here named
"Eagle-BOM-List-Export to txt- css- or html-file.ulp"
But also each other BOM-(item-)file from other programs may be used, beeing in html-format and
surrounding the inserted picture-data with a simple <div>-box. 

To transform a picture into a base64-format it's possible to insert it via "drag and drop",
loading the html-file into a HTML-Editor, f.ex. using my online HTML-Editor @ www.nlohrmann.de
(see help-file there clicking "?" or pressing F1-key).

Using the provided html-file example it's possible to insert a picture into a <div>-box in each row,
resulting in a small symbol (placed here at begin of each row).
To hold the item-list in a overviewable format, each line has a proposed height of 20px, so also
each picture has to be as small as 20px (height), therefore mostly not beeing possible to
recognize it in detail...
Thus the ability to be enlarged via mouse-click and reduced again with a second click.

In Addition: image-data saved once, for repeated use within the file:
------------
If there are repeated items as Resistors or Capacitors (as in electronic circuits often are used),
to be listed, their picture in form of base64-data may be inserted here only once in the file's
js-header, but used repeated times in the html-body, so saving a lot of total (BOM-)file-space.

Yet not implemented in this last feature is a totally automated process: The two (free) provided symbols
(for repeated use of R's and C's) inserted in the header of this file serves as usable examples,
but any additional (repeated) items have to be inserted manually (f.ex. via text-editor), replacing
all " in the <image-data> with \" as f.ex. alt="" has to be coded as alt\"\", etc.
Hint: see commented lines inside the provided html BOM-file example!

For simple use of "Click over to enlarge" inserted images:
----------------------------------------------------------
If you don't have repeated images or items in a html-file it's also possible to use the
provided "Image-Resize.js" Script.
Insert this script (manually) into the header of any html-file with (base64-) pictures.
This script makes all images of that html-file clickable to it's original size and resizing
them with a second click to the given size.

The Principle:
--------------
Each Image in a html-file 
