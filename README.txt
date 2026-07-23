OMGKHUB WEBSITE — README
=========================

FOLDER STRUCTURE
-----------------
index.html      Home
about.html      About
services.html   Full service index (9 lines)
process.html    Delivery workflow
why-us.html     Why choose OMGKHUB
work.html       Past work / portfolio
contact.html    Contact page + message form
css/style.css   All styling, shared across every page
js/main.js      All interactivity, shared across every page
images/         Logo + where your own photos go

Keep this folder structure intact when you upload it anywhere (Netlify,
GitHub Pages, cPanel, etc.). The pages reference css/style.css, js/main.js
and images/ using relative paths, so the folders must stay next to the
HTML files.

CONTACT FORM: HOW MESSAGES REACH YOUR EMAIL
---------------------------------------------
The form on contact.html submits to FormSubmit (https://formsubmit.co),
a free service that forwards form submissions straight to an email
address, no backend or account required.

IMPORTANT — ONE-TIME ACTIVATION STEP:
The very first time anyone submits the form, FormSubmit sends a
confirmation email to omgkhubng@gmail.com. Someone needs to open that
email and click the confirmation link. After that, every future
submission is delivered straight to the inbox automatically.

If you ever want to change the destination email, open contact.html
and edit this line:
    <form action="https://formsubmit.co/omgkhubng@gmail.com" method="POST">

ADDING YOUR OWN PHOTOS
-------------------------
The "Past Work" tiles on work.html (and the 3-image preview on the
home page) are wired to specific file names. Drop your own JPGs into
the images/ folder using these exact names and they'll appear
automatically, tone treatment included:

  images/work-01-corporate-branding.jpg
  images/work-02-id-cards.jpg
  images/work-03-print.jpg
  images/work-04-document-services.jpg
  images/work-05-cac-registration.jpg
  images/work-06-computer-accessories.jpg
  images/work-07-ict-training.jpg
  images/work-08-pos-fintech.jpg

The hero photo frame on the home page is optional; it currently shows
the OMGKHUB logo. To swap it for a real photo, edit the hero-frame
block near the top of index.html.

SOCIAL LINKS
-------------
Live: TikTok, X, YouTube, Snapchat.
Pending (dimmed, disabled): LinkedIn, Telegram, Pinterest.
To activate a pending one, open css/style.css and js are not involved —
just edit the relevant <a class="social-icon pending" href="#" ...>
tag in the footer of each HTML file (or edit build.py's SOCIALS list
and regenerate if you have Python available) and replace href="#"
with the real profile URL, then remove the "pending" class.

CONTACT DETAILS ON FILE
--------------------------
Phone:    +234 805 777 7884
Email:    omgkhubng@gmail.com
Location: Moniya, Ibadan, Nigeria
