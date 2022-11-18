import Edit from '../assets/icons/edit'
import myData from '../assets/mockData/data.json'
const MyProfile = () => {
  const userPrimaryInfo = myData.userProfile.primaryInfo;
  const userSecondaryInfo = myData.userProfile.secondaryInfo;
  const val= () => {
    const rows = [] 
    for(let info in userSecondaryInfo){
      rows.push(<div className='mobile pt-5 flex flex-col items-start'>
        <div className='font-semibold text-sm'>{info}</div>
        <div className='font-normal text-sm text-left'>{userSecondaryInfo[info]}</div>
      </div>)
    }
    return <>{rows}</>
  }
  return (
    <div className='pt-6 pb-10'>
      <div className="profile-into flex flex-row items-center">
        <div className="profile-picture flex-none">
        </div>
        <div className="profile-detail flex-none pl-2.5">
          <div className="user-name flex items-left font-bold text-xl">{userPrimaryInfo.userName}</div>
          <div className="user-email flex items-left font-normal text-sm">{userPrimaryInfo.userEmail}</div>
        </div>
        <div className="edit flex-1"><Edit /></div>
      </div>
      <div className='pl-3'>{val()}</div>
      <div className='logout flex pl-3 pt-5 '>
        <button className='bg-black text-white px-5 py-1.5 rounded-lg font-sm font-semibold'>Logout</button>
      </div>
    </div>
  );
};

export default MyProfile;
