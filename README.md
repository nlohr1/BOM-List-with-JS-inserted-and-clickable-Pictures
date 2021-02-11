# BOM-List with clickable Pictures
HTML-File with "Bill of Materials" for any Project, including clickable pictures.

To create a BOM-List, each CAD-Program has its own Output-format, mostly (text-)CSS-format, although
programs also may output item-lists per HTML-File. Advantages of this format: Readable in each Browser
and able to use images in base64-data-format, this inserted in ONE-html-file only (not as usually spreaded
over the internet, inserting them only as links pointing to each image's URL-Place).

For this I used the mentioned ability to insert pictures in HTML-files known from E-Mails in eml-file-format
(MIME), a Base64 format **inside** the given html-file. This format uses 64 characters of the ASCII-table
beeing "typeable and printable" (also on a screen), so beeing able to insert them directly into any html-file
as a valid *coding for binary-files*, as images originally are.

To create a HTML-(BOM-)file for that purpose, I modified an Eagle .ulp-script to generate a html-bom-file
inserting *a table-cell at begin of each row*, here named "Eagle-BOM-List-Export-w-JScript-htm.ulp" 

BOM-(item-)files generated from other programs may also be used, beeing in html-format and
surrounding the inserted picture-data with a blank &lt;div&gt; box with a chosen CSS-class, to insert repeated images
or without &lt;div&gt; box, but inserted directly as single-image (as link or as base64-data-code) into the html-body.

To transform a picture into a base64-format it's possible to insert it via a simple "drag and drop",
loading the html-file into a (onlne) HTML-Editor, f.ex. using my online HTML-Editor @ www.nlohrmann.de
(see help-file there clicking "?" or pressing keyboards F1-key) - it's free to use for anybody.

But ATTENTION Please: Internet-published images commonly are subjected to their Owners Copyright! So use
them either for privat purposes only or create your own ones to spread – as I do here using f.ex. my two
"symbols" for R's and C's, provided in the html-file (inside the script) as example - this two are free to use
for anybody...

Using the html-file example (file: "BOM-List with clickable Pictures.htm") it's possible to insert a picture
(manually) into the &lt;div&gt;-box of each row, resulting in a small visible symbol, placed at begin of each row.

To hold the desired item-list in a overviewable format, each line has a proposed height of 20px, so also
each picture has to be as small as 20px (height), therefore most of this small-sized "Icons" at first view are
not recognizeable in detail...
Thus the ability to enlarge them via a mouse-click and reduce them again with a second click.

Addition: image-data saved once in the header, for repeated use within the file-body:
---------
If there are repeated items to be listed, as Resistors or Capacitors (in electronic circuits often used),
their picture in form of base64-data may be inserted *only once* as a variable in the html-file's js-header,
but used *repeated times* in the html-body, so saving a lot of total (BOM-)file space.

Yet not implemented in this last feature is a total automated process to insert repeated pictures: The two
provided "symbols" (for repeated use of R's and C's) inserted in the js-header serves as usable examples,
but additional repeated-items have to be inserted manually (f.ex. via a text-editor),
replacing all " in the *&lt;image-data&gt;* with \\" – as f.ex. *alt=""* image-tags have to be coded here
as *alt=\\"\\"* (for js to read this special " character as part-of-image-code and not as part-of-a-command).

Hint: For more detailed description see //commented lines inside the html- and js-file examples.

Script for simple "Click to enlarge" (each image in a given html-file):
-----------------------------------------------------------------------
If you don't have repeated images or items in a html-file it's also possible to use the script
"Image-Resize.js", adding it's lines to your html-file.
This simply makes all images of a html-file clickable to show them with it's original size and resizing
them with a second click to the given image-size (provided normally inside the image as *width=\"xy\"*
or via css-width... With this "simpler" example normally no other (css-)insertion is necessary.

The File "Resize-only-One-Image.js"
-----------------------------------
...does what the name says: Inserting this js-script within one blank-space between the image-file tags  
&lt;img src=\"...\" alt=\"\" width=\"50\"&gt; (number "50" here sets the image's width, in "px")  
makes *this* image blue-bordered and resizeable by simple mouse-click.

The Principle:
--------------
The provided (BOM)-html-file adds a css-layout with blue border on white background for all image &lt;div&gt;-cells
inside each listed item in a (table-)row, indicating that our "linked icons" inside this "imag"-cells may be clicked,
and setts also a unique (small) hight of 20px for all images within the file.

After loading the html-file into a browser, the js-script then adds a unique ID to each image, which later
is used to identify the clicked one, "stealing" (=deleting) them it's given height, here the 20px to show this
image in its original (greater) size.  
After a second click the given height (20px) is reinstalled.  
Hint: more detailed //commented descriptions at each end of line inside files.
