import PeopleUser from "@/app/components/people-page-components/people-user";
import RequestsUser from "@/app/components/requests/requests-user";

export default function RequestsList() {
  return (
    <div className="p-4 pb-0 flex flex-col space-y-4 w-[25%]">
      {/* <SearchInput /> */}
      <div className="overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <RequestsUser />
      {/* {
        users.map((user, index) => {
          return <UserChat user={user} key={index} />
        })
      } */}
      </div>

    </div>
  )
}