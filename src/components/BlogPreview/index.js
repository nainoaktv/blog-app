import Link from "next/link";

export default function BlogPreview() {
  const date = "Dec 26th, 2023";
  const category = "Tech";
  const title = "Temporary Title";
  const imageUrl =
    "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80";
  const excerpt =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const authorImage =
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250";
  const authorName = "John Doe";
  const authorRole = "Front-end Developer";

  return (
    <div className="w-full grid grid-cols-3 gap-4 mt-16">
      <article className="flex flex-col md:space-x-4 mb-8">
        <div className="relative w-full">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-auto object-cover rounded"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex items-center justify-between">
            <time className="text-sm text-white">{date}</time>
            <Link
              className="text-sm text-amber-600 hover:text-amber-500"
              href={`/#`}
            >
              {category}
            </Link>
          </div>
          <h3 className="text-xl mt-2">
            <Link className="text-amber-600 hover:text-amber-500" href="/#">
              {title}
            </Link>
          </h3>
          <p className="mt-2 text-white">{excerpt}</p>
          <div className="flex items-center mt-4">
            <img
              src={authorImage}
              alt={authorName}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-2">
              <p className="text-sm font-bold">{authorName}</p>
              <p className="text-xs text-gray-500">{authorRole}</p>
            </div>
          </div>
        </div>
      </article>
      <article className="flex flex-col md:space-x-4 mb-8">
        <div className="relative w-full">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-auto object-cover rounded"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex items-center justify-between">
            <time className="text-sm text-white">{date}</time>
            <Link
              className="text-sm text-amber-600 hover:text-amber-500"
              href={`/#`}
            >
              {category}
            </Link>
          </div>
          <h3 className="text-xl mt-2">
            <Link className="text-amber-600 hover:text-amber-500" href="/#">
              {title}
            </Link>
          </h3>
          <p className="mt-2 text-white">{excerpt}</p>
          <div className="flex items-center mt-4">
            <img
              src={authorImage}
              alt={authorName}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-2">
              <p className="text-sm font-bold">{authorName}</p>
              <p className="text-xs text-gray-500">{authorRole}</p>
            </div>
          </div>
        </div>
      </article>
      <article className="flex flex-col md:space-x-4 mb-8">
        <div className="relative w-full">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-auto object-cover rounded"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex items-center justify-between">
            <time className="text-sm text-white">{date}</time>
            <Link
              className="text-sm text-amber-600 hover:text-amber-500"
              href={`/#`}
            >
              {category}
            </Link>
          </div>
          <h3 className="text-xl mt-2">
            <Link className="text-amber-600 hover:text-amber-500" href="/#">
              {title}
            </Link>
          </h3>
          <p className="mt-2 text-white">{excerpt}</p>
          <div className="flex items-center mt-4">
            <img
              src={authorImage}
              alt={authorName}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-2">
              <p className="text-sm font-bold">{authorName}</p>
              <p className="text-xs text-gray-500">{authorRole}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
