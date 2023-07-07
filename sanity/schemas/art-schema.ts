const art = {
  name: "art",
  title: "Art",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "month",
      title: "Month \(Format: MM-YYYY\)",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      }
    },
    {
      name: "slug",
      title: "Click 'Generate' after entering 'Month' above",
      type: "slug",
      options: {
        source: "month",
        slugify: (input: any) => input.slice(0, 7).split('-').reverse().join('-'),
        maxLength: 96, // <-- define validation here
      },
    },
    {
      name: "featured_artists",
      title: "Featured Artists",
      type: "object",
      fields: [
        {
          name: "content",
          title: "Add the artists below",
          type: "array",
          of: [{
            type: "document",
            fields: [
              { name: "artist", title: "Artist", type: "string" },
              { name: "images", title: "Images", type: "array", of: [{ type: "image" }] },
              { name: "caption", title: "Caption", type: "string"},
              { name: "description", title: "Description", type: "string"},
              { name: "artist_url", title: "Artist Url", type: "string" },
            ]
          }],
        }
      ]
    },
  ],
};

export default art;


// {
//   name: 'image1',
//   title: 'Image1',
//   type: 'image',
//   options: { hotspot: true },
//   fields: [
//     {
//       name: 'artist',
//       title: 'Artist',
//       type: 'string'
//     },
//     {
//       name: 'month',
//       title: 'Month',
//       type: 'string'
//     },
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string'
//     },
//     {
//       name: "content",
//       title: "Content",
//       type: "array",
//       of: [{ type: "text" }],
//     },
//     {
//       name: "artist_url",
//       title: "Artist_Url",
//       type: "string",
//     },
//     {
//       name: 'alt',
//       title: 'Alt',
//       type: 'string'
//     }
//   ]
// },