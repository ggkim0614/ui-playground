function Navbar() {
  return (
    <div className="flex items-center justify-between bg-blue-50 px-4 py-4">
      <span className="flex gap-1">
        <div className="font-jbm text-[16px] font-bold leading-tight tracking-tight text-gray-900">
          INTERFACE LAB.
        </div>
        <div className="font-jbm text-[14px] font-medium">v1.0</div>
      </span>

      <div className="font-jbm text-[16px] font-medium leading-normal text-gray-500">
        Shelter for&nbsp;
        <span className="text-gray-900">design explorations</span>
        &nbsp;and&nbsp;
        <span className="text-gray-900">prototypes</span>
      </div>
      <div className="font-jbm text-[16px] font-medium text-gray-500">
        Crafted by&nbsp;
        <a
          href="https://georgekim.studio/"
          className="font-semibold text-blue-500 hover:underline"
        >
          @George Kim
        </a>
      </div>
    </div>
  )
}

export default Navbar