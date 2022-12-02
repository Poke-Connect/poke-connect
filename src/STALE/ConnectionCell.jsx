//STALE_FILE

import Smiley from "assets/icons/Smiley";
const ConnectionCell = ({ pokeDetails, onClick }) => {
  return (
    <div>
      <div
        className="flex flex-row py-8 px-2 justify-between items-center border-b border-lightGreen gap-3"
        onClick={onClick}
      >
        <div className="icon flex-none w-14 h-14 bg-lightGray rounded-lg flex items-center justify-center">
          <Smiley />
        </div>
        <div className="info flex-auto">
          <div className="text-base font-semibold flex justify-start">
            {pokeDetails.name}
          </div>
          <div className="text-xs font-light text-lightGray3 flex justify-start">
            {pokeDetails.lastMessage}
          </div>
        </div>
        <div className="date flex-none flex justify-end font-medium text-sm text-lightGray2">
          {pokeDetails.time}
        </div>
      </div>
    </div>
  );
};

export default ConnectionCell;
