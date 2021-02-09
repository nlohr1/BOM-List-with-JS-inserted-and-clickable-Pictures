# BOM-List with clickable Pictures
HTML-File with "Bill of Materials" for any Project, herewith including clickable pictures.

To create a BOM-List, each CAD-Program has its own Output-format, mostly (text-)CSS-format, although
programs also may output item-lists per HTML-File. Advantages of this format: Readable in each Browser
and able to use images in base64-data-format, this inserted in ONE-html-file only (not as usually spreaded
over the internet, inserting only as a Link pointing to image's URL-Place).

For this I used the mentioned ability to insert pictures in HTML-files known from E-Mails in eml-file-format
(MIME), a Base64 format **inside** the given html-file. This format uses 64 characters of the ASCII-table
beeing "typeable and printable" (also on a screen), so beeing able to insert them directly into any html-file
as a valid code for binary-files, as images originally are.

To create a HTML-(BOM-)file for that purpose, I modified an Eagle .ulp-script to generate a html-file
inserting *a table-cell at begin of each row*, here named:

"Eagle-BOM-List-Export to txt- css- or html-file.ulp"

BOM-(item-)files generated from other programs may also be used, beeing in html-format and
surrounding the inserted picture-data with a blank &lt;div&gt; box to insert repeated images pre CSS classes.

To transform a picture into a base64-format it's possible to insert it via a simple "drag and drop",
loading the html-file into a (onlne) HTML-Editor, f.ex. using my online HTML-Editor @ www.nlohrmann.de
(see help-file there clicking "?" or pressing keyboards F1-key) - it's free.

ATTENTION Please: Internet-published images commonly are subjected to the Owners Copyright! So use
them either for privat purposes only or create your own ones to spread – as I do here using f.ex. my two
"symbols" for R's and C's, provided in the html-file (inside the script) as example - this are free to use!

Using the html-file example (file: "BOM-List with clickable Pictures.htm") it's possible to insert a picture
(manually) into the &lt;div&gt;-box of each row, resulting in a small visible symbol, placed at begin of each row.

To hold the item-list in a overviewable format, each line has a proposed height of 20px, so also
each picture has to be as small as 20px (height), therefore mostly not beeing possible to recognize
this small item-"Icons" in detail at first view...
Thus the ability to enlarge them via mouse-click and reduce them again with a second click.

Addition: image-data saved once, for repeated use within the file:
---------
If there are repeated items to be listed, as Resistors or Capacitors (in electronic circuits often used),
their picture in form of base64-data may be inserted *only once* as a variable in the html-file's js-header,
but used *repeated times* in the html-body, so saving a lot of total (BOM-)file space.

Yet not implemented in this last feature is a total automated process to insert pictures: The two provided
"symbols" (for repeated use of R's and C's) inserted in the js-header, serves as usable examples, but 
if any additional item is used to be repeated, it have to be inserted there manually (f.ex. via a text-editor),
replacing all " in the *&lt;image-data&gt;* with \\" – as f.ex. commonly used *alt=""* has to be coded
as *alt=\\"\\"*

Also each image in the *html-body* has to be surrounded with a blank &lt;div&gt;...&lt;/div&gt;-box.
Hint: For more detailed description see //outcommented-lines inside both html and js-file examples.

For a simpler "Click over to enlarge" each image in any html-file:
------------------------------------------------------------------
If you don't have repeated images or items in a html-file it's also possible to use the provided
"Image-Resize.js" js-script, adding this lines to your html-file.
This script simply makes all images of a html-file clickable to it's original image-size and resizing
them with a second click to the given image-size (provided normally inside the image as *width=\"xy\"*
or via css... In this "simpler" example normally no other insertion is necessary.

The File "Resize-only-One-Image.js"
-----------------------------------
...does what the name says: Inserting this js-script within one blank-space between the

&lt;img src=\"...\" alt=\"\" width=\"50\"&gt;

image-file tags makes this image blue-bordered and resizeable by mouse-click.\n
(Number "50" here is the pictures width in px).

The Principle:
--------------
The provided (BOM) html-file adds a css-layout with blue border on white background for all image &lt;div&gt;-cells
inside each listed item in a (table-)row, indicating that our "linked icons" inside this cells may be clicked,
setting also a unique (small) hight of 20px for all images in the file.

After loading the html-file into a browser, the js-script adds a unique ID to each image, which later
is used to identify the clicked one, "stealing" (=deleting) them it's given height.
After a second click this given height (here 20px) is reinstalled.
Hint: more detailed //commented-out descriptions at each end of js-line...
