# alexanderbenko.dev

<h2>Welcome To the code base for my portfolio site.</h2>

<p>For those who don't know this is the second version of my portfolio site. I ran into a couple of issues with my old one and decided to remake it and they were... </p>

<ol>
  <li>The database host I was using shut down it's free plan so I had to come up with a different way to get a bunch of images without hard coding it into the front end.</li>
  <li>I did not feel like it acurately portrayed my skills.</li>
</ol>

<p>So I completely remade it. The updated tech stack is : Next.js and React Spring for the more advanced animations/transisitons.</p>
<p>All Styling is vanilla css or applied using javascript/react in line styling.</p>

Current Speed Test:
<img src="/speed_test.png"></img>

<p>Using Next.js's Image Optimization Plugin, I was able to self host my images and did not use an external host.</p>
<p>Like every software project I find a new idea/concept to implement so I can get more comfortable with it. This time is was using React Hooks instead of using a stateful component.</p>



<ol>
  This is best demonstrated in these parts:
  <li>https://github.com/alexbenko/alexanderbenko.dev/blob/master/pages/adventures.js</li>
  <li>https://github.com/alexbenko/alexanderbenko.dev/blob/master/components/Image.jsx</li>
</ol>

<p>I implemented the Levenshtein distance formula in the search bar on the adventures page. This formula compares two strings and returns a percentage on how similar they are.
You can see how I used it here: https://github.com/alexbenko/alexanderbenko.dev/blob/c670d4e4b474c2001b05fda9030495e0c6b62492/pages/adventures.js#L57
</p>
<p>I challenged myself to make an image gallery in way that a user has easy access to all the images without rendering all the images at once.</p>
