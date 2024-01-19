/* eslint-disable @next/next/no-img-element */
export const Loading = () => (
  <div
    className={
      'flex flex-col justify-center items-center rounded h-xs text-center space-y-2 py-14'
    }
    style={{ zoom: 0.85 }}
  >
    <div className="bg-primary p-3 rounded-md">
      <img
        src="/images/starwars.png"
        className="w-12 opacity-75"
        alt="Loading..."
      />
    </div>
    <p className={'text-primary-light font-medium'}>Please wait...</p>
  </div>
)
