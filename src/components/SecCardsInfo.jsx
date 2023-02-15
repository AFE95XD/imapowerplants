import Energia from "./svg/Energia";
import FrabricaAlimentos from "./svg/FrabricaAlimentos";
import Mantenimiento from "./svg/Mantenimiento";

const posts = [
  {
    icono: <Energia />,
    titulo: "Energia",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    icono: <FrabricaAlimentos />,
    titulo: "Frabrica de Alimentos",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    icono: <Mantenimiento />,
    titulo: "Mantenimiento",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
];

const SecCardsInfo = () => {
  return (
    <section className="bg-contain bg-center h-auto bg-[url('src/assets/img/map.png')]">
      <div className="mx-auto max-w-7xl px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8 text-center py-32">
        <span className="font-roboto text-base font-bold text-[#0000FF]">
          Realizamos Proyectos Eficientes
        </span>
        <h2 className="font-barlow text-2xl font-bold text-[#1b1a1a] capitalize">
          Soluciones rápidas, inteligentes y excelentes para hacer crecer su
          negocio
        </h2>

        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.titulo}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <div>{post.icono}</div>
                  {/* <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a> */}
                  <h4 className="text-left">
                    {post.titulo} <br />
                  </h4>
                </div>
                {/* <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecCardsInfo;
