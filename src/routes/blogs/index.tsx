import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';


// as soon as the user comes to this page, I have to generate the list of blogs
// this 'data' should be generated by looking at the filesystem at 'routes/blogs/*' 
// all the directory names will be the id of the blogs
const blogs = [
  // { year: 2023, items: [{ blog: "how-to-speak", month: "Mar 23" }, { blog: "dummy-blog", month: "Jun 11" }] },
]

const BlogEntry = component$<{ blog: string, month: string }>(({ blog, month }) => {
  return (
    <div class="flex align-middle mt-3">
      <div class="w-24 text-lg text-slate-400 flex items-center">
        {month}
      </div>
      <a href={`/blogs/${blog.toLowerCase().replaceAll(" ", "-")}`}>
        <div class="highlight link">
          {blog}
        </div>
      </a>
    </div>
  )
})


const capitalize = (str: string) => {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

  }
  const str2 = arr.join(" ");
  return str2
}


// no question marks are allowed as blog titles
export default component$(() => {
  return (
    <>
      <h1>
        Blogs
      </h1>
      <p>
        No blogs as of now...
      </p>
      {blogs.map(item => <>
        <h2> {item.year} </h2>
        {item.items.map(i => <BlogEntry blog={capitalize(i.blog.replaceAll("-", " "))} month={i.month} />)}
      </>)}
    </>
  );
});

export const head: DocumentHead = {
  title: "Blogs - Nithish Karthik",
  meta: [
    {
      name: 'description',
      content: "Blogs by Nithish Karthik",
    },
  ],
}
