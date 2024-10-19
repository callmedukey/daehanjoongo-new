import React from "react";
import { usage } from "@/lib/legal";
const TermsPage = () => {
  return (
    <main className="py-12 lg:px-16 md:px-8 px-4 max-w-4xl mx-auto space-y-6 leading-relaxed">
      <h1 className="thirty text-center font-bold">이용약관</h1>
      {usage.map((item, index) => (
        <React.Fragment key={index}>
          {item?.title && <h2 className="font-bold twenty">{item.title}</h2>}

          {item?.text && <p>{item.text}</p>}

          {item?.ol && (
            <ol className="list-decimal list-outside space-y-2 lg:pl-12 md:pl-8 pl-4">
              {item.ol.map((olItem) => {
                if (typeof olItem === "string") {
                  return <li key={olItem}>{olItem}</li>;
                } else {
                  return (
                    <li key={Math.random()}>
                      {"text" in olItem && olItem?.text && (
                        <span>{olItem?.text}</span>
                      )}
                      {"ul" in olItem && olItem?.ul && (
                        <ul className="list-disc list-outside space-y-2 lg:pl-12 md:pl-8 pl-4">
                          {olItem?.ul.map((ulItem) => (
                            <li key={ulItem}>{ulItem}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }
              })}
            </ol>
          )}
        </React.Fragment>
      ))}
    </main>
  );
};

export default TermsPage;
