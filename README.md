# XXX Education — Homepage refresh

This is a static HTML/CSS/JavaScript website redesign based on the supplied homepage reference. It includes the updated homepage, responsive navigation, a three-panel hero carousel, five course cards, teaching approach/about/contact sections, and course-detail pages.

## Preview locally

1. Extract the ZIP while keeping the `courses` folder alongside `index.html`.
2. Open `index.html` in a browser. No build step or package installation is required.
3. For local development, you can also serve this folder with VS Code Live Server.

## Replace the sample contact information

Edit `site-config.js` and fill in the centre's actual `email`, `phone`, `whatsapp`, `address`, and `openingHours`. WhatsApp should be entered in international format using digits only (for example, `85261234567`). The contact section’s **立即查詢** button and the round WhatsApp icon fixed at the bottom-right both open the same WhatsApp conversation with a pre-filled course enquiry. Until a centre number is configured, WhatsApp opens with the enquiry text and lets the visitor choose a recipient.

## Hero photos and attribution

The homepage hero now has three distinct background photos. The photo cross-fades together with the matching text slide; arrows, dots, and the six-second automatic rotation all control both the text and image.

1. **General tutoring / guided learning:** Vitaly Gariev — https://unsplash.com/photos/teacher-helping-young-student-with-math-problems-at-desk-wr2OzAO5fpc
2. **Language learning / classroom study:** Gustavo Fring — https://www.pexels.com/photo/a-man-teaching-his-students-7156128/ — https://www.pexels.com/license/ (exact selected Pexels photo, ID 7156128: teacher guiding students at a table in a bright classroom with classroom artwork and US/UK flags).
3. **Creative classroom learning:** Ahmadreza Rezaie — https://unsplash.com/photos/children-learning-and-creating-art-in-a-classroom-FxzoAr9QBKw

Photos 1 and 3 are from Unsplash and are free to use under the Unsplash License. Photo 2 is the exact selected image by Gustavo Fring on Pexels (photo ID 7156128). Its photo page marks it as “Free to use,” and the Pexels License permits use on websites, including commercial websites; attribution is not required (credit is included here for reference). All three photos load from their respective image CDNs, so an internet connection is needed to display them. The course dropdown opens on hover and closes when the pointer leaves on desktop; it remains tap-to-expand on mobile.

## Course information

The five course areas and descriptions are based on the live site content: Chinese, English, Mathematics, International Chess, and Chinese Chess. Prices, schedules, class length, class size, age/grade eligibility, and teaching materials remain unspecified and are therefore not invented. Update the course pages once the centre confirms these details.

## Main files

- `index.html` — redesigned homepage
- `styles.css` — layout, colours, cards, responsive styles, and course page styles
- `script.js` — mobile navigation, hero carousel, contact fields, and shared WhatsApp links
- `site-config.js` — editable contact information
- `courses/` — five course detail pages
- `favicon.svg` — browser tab icon
