import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'

const UserDetail = () => {
  const { store } = useContext(StoreContext)
  const { userDetail } = store
  return (
    <>
      {userDetail && (
        <div className='max-w-4xl mx-auto rounded-md p-4 border-solid border grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 mt-8'>
          <div className='sm:text-center'>
            <img
              src={userDetail.avatar_url}
              alt={userDetail.name}
              className='inline-block h-32 w-32 rounded-full ring-2 ring-white mr-2'
            />
          </div>
          <div className='col-span-4 pt-12 '>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 mb-4'>
              <div className='col-span-2 sm:text-center lg:text-left'>
                <h1 className='text-2xl font-semibold text-gray-700 mb-3'>{userDetail.name}</h1>
                <p className='font-semibold text-gray-400 mb-3'>{userDetail.login}</p>
                {userDetail.bio && (
                  <p className='font-semibold text-gray-400 leading-4'>{userDetail.bio}</p>
                )}
              </div>
              <div className='col-span-3'>
                <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 bg-gray-100 rounded-md text-center mt-4 mb-4'>
                  <div className='p-2'>
                    <span className='text-sm font-semibold text-gray-400'>Repos</span>
                    <p className='text-3xl font-semibold text-gray-700'>
                      {userDetail.public_repos}
                    </p>
                  </div>
                  <div className='p-2'>
                    <span className='text-sm font-semibold text-gray-400'>Followers</span>
                    <p className='text-3xl font-semibold text-gray-700'>{userDetail.followers}</p>
                  </div>
                  <div className='p-2'>
                    <span className='text-sm font-semibold text-gray-400'>Following</span>
                    <p className='text-3xl font-semibold text-gray-700'>{userDetail.following}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5'>
              <div className='col-span-2 sm:text-center lg:text-left'>
                {userDetail.location && (
                  <p className='font-semibold text-gray-400 mb-3'>
                    <svg
                      fill='#000000'
                      height='20px'
                      width='20px'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='inline-block opacity-50 mr-2'
                    >
                      <g id='Location-Filled'>
                        <path
                          d='M12,1C7.58,1,4,4.58,4,9c0,7.08,8,14,8,14s8-6.92,8-14C20,4.58,16.42,1,12,1z M12,12c-1.66,0-3-1.34-3-3s1.34-3,3-3
		s3,1.34,3,3S13.66,12,12,12z'
                        />
                      </g>
                    </svg>
                    {userDetail.location}
                  </p>
                )}
                {userDetail.email && (
                  <p className='font-semibold text-gray-400 mb-3'>
                    <svg
                      fill='#000000'
                      xmlns='http://www.w3.org/2000/svg'
                      width='20px'
                      height='20px'
                      viewBox='0 0 550.795 550.795'
                      className='inline-block opacity-50 mr-2'
                    >
                      <g>
                        <g>
                          <path
                            d='M501.613,491.782c12.381,0,23.109-4.088,32.229-12.16L377.793,323.567c-3.744,2.681-7.373,5.288-10.801,7.767
			c-11.678,8.604-21.156,15.318-28.434,20.129c-7.277,4.822-16.959,9.737-29.045,14.755c-12.094,5.024-23.361,7.528-33.813,7.528
			h-0.306h-0.306c-10.453,0-21.72-2.503-33.813-7.528c-12.093-5.018-21.775-9.933-29.045-14.755
			c-7.277-4.811-16.75-11.524-28.434-20.129c-3.256-2.387-6.867-5.006-10.771-7.809L16.946,479.622
			c9.119,8.072,19.854,12.16,32.234,12.16H501.613z'
                          />
                          <path
                            d='M31.047,225.299C19.37,217.514,9.015,208.598,0,198.555V435.98l137.541-137.541
			C110.025,279.229,74.572,254.877,31.047,225.299z'
                          />
                          <path
                            d='M520.059,225.299c-41.865,28.336-77.447,52.73-106.75,73.195l137.486,137.492V198.555
			C541.98,208.396,531.736,217.306,520.059,225.299z'
                          />
                          <path
                            d='M501.613,59.013H49.181c-15.784,0-27.919,5.33-36.42,15.979C4.253,85.646,0.006,98.97,0.006,114.949
			c0,12.907,5.636,26.892,16.903,41.959c11.267,15.061,23.256,26.891,35.961,35.496c6.965,4.921,27.969,19.523,63.012,43.801
			c18.917,13.109,35.368,24.535,49.505,34.395c12.05,8.396,22.442,15.667,31.022,21.701c0.985,0.691,2.534,1.799,4.59,3.269
			c2.215,1.591,5.018,3.61,8.476,6.107c6.659,4.816,12.191,8.709,16.597,11.683c4.4,2.975,9.731,6.298,15.985,9.988
			c6.249,3.685,12.143,6.456,17.675,8.299c5.533,1.842,10.655,2.766,15.367,2.766h0.306h0.306c4.711,0,9.834-0.924,15.368-2.766
			c5.531-1.843,11.42-4.608,17.674-8.299c6.248-3.69,11.572-7.02,15.986-9.988c4.406-2.974,9.938-6.866,16.598-11.683
			c3.451-2.497,6.254-4.517,8.469-6.102c2.057-1.476,3.605-2.577,4.596-3.274c6.684-4.651,17.1-11.892,31.104-21.616
			c25.482-17.705,63.01-43.764,112.742-78.281c14.957-10.447,27.453-23.054,37.496-37.803c10.025-14.749,15.051-30.22,15.051-46.408
			c0-13.525-4.873-25.098-14.598-34.737C526.461,63.829,514.932,59.013,501.613,59.013z'
                          />
                        </g>
                      </g>
                    </svg>
                    {userDetail.email}
                  </p>
                )}
              </div>
              <div className='col-span-3 sm:text-center lg:text-left'>
                {userDetail.twitter_username && (
                  <p>
                    <a
                      href={`https://twitter.com/${userDetail.twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-block font-semibold text-gray-400 mb-3'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 48 48'
                        width='25px'
                        height='25px'
                        className='inline-block mr-2'
                      >
                        <path
                          fill='#03A9F4'
                          d='M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429'
                        />
                      </svg>
                      {userDetail.twitter_username}
                    </a>
                  </p>
                )}
                {userDetail.blog && (
                  <p>
                    <a
                      href={userDetail.blog}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-block font-semibold text-gray-400 mb-3'
                    >
                      <svg
                        width='20px'
                        height='20px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='inline-block opacity-50 mr-2'
                      >
                        <path
                          d='M10 8H7C4.79086 8 3 9.79086 3 12V12C3 14.2091 4.79086 16 7 16H10M14 8H17C19.2091 8 21 9.79086 21 12V12C21 14.2091 19.2091 16 17 16H14M9 12H15'
                          stroke='#000000'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      {userDetail.blog}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UserDetail
