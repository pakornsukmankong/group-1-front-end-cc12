import Categories from '../categories/Categories';

function HomeContainer() {
  let data = new Array(100).fill(1);
  return (
    <>
      <div className="sticky top-20 left-0 right-0 ">
        <Categories />
      </div>
      <main className="block px-8 mt-5">
        <div className="grid gap-x-6 gap-y-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
          {data.map((i, keys) => {
            return (
              <div key={keys} className="">
                <div className="">
                  <div className="aspect-square">
                    <img
                      className="object-none object-center aspect-square rounded-lg"
                      src={
                        'https://a0.muscache.com/im/pictures/aa86a6eb-be43-4ee4-89a9-d77f3ac31270.jpg?im_w=720'
                      }
                      alt="pictures"
                    />
                  </div>

                  <div>
                    <div className="g1qv1ctd cb4nyux dir dir-ltr">
                      <div className="font-bold" id="title_20472623">
                        Paklok A. Thalang, Thailand
                      </div>
                      <div className="f15liw5s s1cjsi4j dir dir-ltr">
                        <span aria-label="Featured in Homecrux">
                          <span className=" dir dir-ltr">
                            Featured in Homecrux
                          </span>
                        </span>
                      </div>
                      <div className="f15liw5s s1cjsi4j dir dir-ltr">
                        <span aria-label="Nov 21 – 26">
                          <span className=" dir dir-ltr">Nov 21 – 26</span>
                        </span>
                      </div>
                      <div className="p11pu8yw dir dir-ltr">
                        <div>
                          <div className="_i5duul">
                            <span className="_14y1gc">
                              <div
                                className="_1jo4hgw"
                                aria-hidden="true"
                              ></div>
                              <span className="font-bold">฿64,852</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <span
                        aria-label="5.0 out of 5 average rating"
                        className="t5eq1io r4a59j5 dir dir-ltr"
                        role="img"
                      >
                        <span className="su0q88m dir dir-ltr">
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: 'block',
                              height: '12px',
                              width: '12px',
                              fill: 'currentcolor'
                            }}
                          >
                            <path
                              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span
                          aria-hidden="true"
                          className="r1dxllyb dir dir-ltr"
                        >
                          5.0
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default HomeContainer;
