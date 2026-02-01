/**
 * Brilliance 조직도 섹션
 * - 타이틀: "Brilliance Organization Chart"
 * - 설명 텍스트
 * - 프로필 카드 그리드 (2열 구조)
 */

// 임시 데이터 - 나중에 i18n으로 변경
const teamMembers = [
  {
    id: 1,
    name: "Bumkun Choi",
    title: "Chief Executive Officer",
    role: "Prudential Planner",
    image: "/images/team/member1.jpg",
  },
  {
    id: 2,
    name: "Kyunghoon Kim",
    title: "Chief Executive Officer",
    role: "Prudential Planner",
    image: "/images/team/member2.jpg",
  },
  {
    id: 3,
    name: "Youngsok Kim",
    title: "Executive Director",
    role: "Prudential Planner",
    image: "/images/team/member3.jpg",
  },
  {
    id: 4,
    name: "Taewoo Kim",
    title: "Executive Director",
    role: "Prudential Planner",
    image: "/images/team/member4.jpg",
  },
  {
    id: 5,
    name: "Yongsu Park",
    title: "Director",
    role: "Prudential Planner",
    image: "/images/team/member5.jpg",
  },
  {
    id: 6,
    name: "Eunsoo Shin",
    title: "Director",
    role: "Prudential Planner",
    image: "/images/team/member6.jpg",
  },
  {
    id: 7,
    name: "Kyungsik Yoon",
    title: "Director",
    role: "Prudential Planner",
    image: "/images/team/member7.jpg",
  },
];

export default function OrganizationChart() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* 타이틀 */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Brilliance Organization Chart
          </h2>
          <p className="text-gray-600">
            Organizational structure highlighting our key partners contributing
            to Brilliance's success.
          </p>
        </div>

        {/* 프로필 카드 그리드 */}
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex w-40 flex-col items-start rounded-lg border border-gray-200 bg-white p-2 shadow-md transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-lg sm:w-44 sm:p-2 lg:w-48 lg:p-4"
            >
              {/* 프로필 이미지 */}
              <div className="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-lg bg-gray-200 sm:h-24 sm:w-24 lg:h-32 lg:w-32">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* 정보 */}
              <h3 className="text-sm font-semibold sm:text-base lg:text-lg">
                {member.name}
              </h3>
              <p className="mb-2 text-[10px] text-gray-600 sm:text-xs lg:text-sm">
                {member.title}
              </p>
              <p className="text-sm font-medium sm:text-base lg:text-lg">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
