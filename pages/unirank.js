import React from "react";
import UniRankData from "../json/uniRank.json";
import Image from "next/image";

let { data } = UniRankData;

const UniRank = () => {
  return (
    <div className="px-3">
      {data.map((item) => {
        return (
          <div key={item.id} className={`grid grid-cols-12 gap-3 py-1 ${item.id==="SL"?"font-bold":""}`}>
            <p className="col-span-1">{item.id}</p>
            <div className={`col-span-2 md:col-span-1 rounded-full overflow-hidden w-[${item.id==="SL"?"":"30px"}] h-[30px]`}>{item.id==="SL"?"Logo":
              <Image src={item.imgSrc} height={30} width={30} alt="logo" />
            }</div>
            <p className="col-span-6 md:col-span-7">{item.title}</p>
            <p className="col-span-3 md:col-span-2">{item.city}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UniRank;
