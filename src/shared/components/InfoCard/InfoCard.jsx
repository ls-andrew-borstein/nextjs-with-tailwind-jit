const InfoCard = ({ description, title, url }) => {
  return (
    <a
      href={url}
      className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    >
      <h2 className="text-2xl font-bold">{title} &rarr;</h2>
      <p className="mt-4 text-xl">{description}</p>
    </a>
  );
};

export { InfoCard };
