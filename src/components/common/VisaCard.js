import VisaIcon from "../assests/icons/visaIcon";

const dots = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function VisaCard({ cardcolor, cardno, holder, expiredate }) {
  return (
    <div className="py-4">
      <div className={`${cardcolor} px-8 pt-2 pb-6 rounded-xl`}>
        <VisaIcon />
        <div className="flex justify-between items-center pt-2 pb-4 text-white text-base">
          {dots.map((k) => (
            <div key={k.id} className="flex">
              <p className="w-[7px] h-[7px] bg-[#ffffff7c] rounded-full"></p>
              <p className="w-[7px] h-[7px] bg-[#ffffff7c] rounded-full mx-1"></p>
              <p className="w-[7px] h-[7px] bg-[#ffffff7c] rounded-full mr-1"></p>
              <p className="w-[7px] h-[7px] bg-[#ffffff7c] rounded-full"></p>
            </div>
          ))}

          <p>{cardno}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-[#f8f8f890]">Card Holder</p>
            <h4 className="text-sm text-white">{holder}</h4>
          </div>
          <div>
            <p className="text-xs text-[#f8f8f890]">Expires</p>
            <h4 className="text-sm text-white">{expiredate}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

// bg-[${bgcolor}]
