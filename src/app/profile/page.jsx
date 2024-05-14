'use client';
import { useState, useEffect,Fragment, } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import profileDefault from '@/assets/images/profile.png';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';
// import  containerInner from '..'

import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import SlidingHeroContainer from '@/components/SlidingHeroContainer'
import { heroImages } from '@/data'
import HeroGiff from '@/assets/images/ezgif-7-5ad70af6f1.gif'
import { ClassNames } from '@emotion/react';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProfilePage = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;
  const profileBacground = session?.user?.background;

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProperties = async (userId) => {
      if (!userId) {
        return;
      }

      try {
        const res = await fetch(`/api/properties/user/${userId}`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch user properties when session is available
    if (session?.user?.id) {
      fetchUserProperties(session.user.id);
    }
  }, [session]);

  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this property?'
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        // Remove the property from state
        const updatedProperties = properties.filter(
          (property) => property._id !== propertyId
        );

        setProperties(updatedProperties);

        toast.success('Property Deleted');
      } else {
        toast.error('Failed to delete property');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete property');
    }
  };

  return (
    <section className='bg-blue-50'>
    <div className='container m-auto pb-24'>
      <div className='containerInner'>
        <h1 className='text-3xl font-bold mb-4'>Your Profile</h1>
        <div className="pointer-events-auto w-screen max-w-none relative bg-gray-200 !bg-[var(--themeColor)]">
          <div className="pb-1 sm:pb-6">
            <div className='pt-[14%]'>
              <div className="relative h-[20vh] xl:h-[43vh]">
              <Image
              className="hidden sm:flex !absolute h-full w-full object-cover"
                src={profileBacground ? profileBacground : "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"}
                width={200}
                height={200}
                alt='User'
              />
                <Image
                className="motion-reduce absolute sm:hidden h-full w-full object-cover"
                src={profileBacground ? profileBacground : "https://cecred.com/cdn/shop/files/Cecred_OurStory_MOBILE.jpg?v=1708294965&width=823"}
                 mobile-image="IiI=" aspect-ratio="4.828703703703703" mobile-aspect-ratio="" alt="user Profile Background Image" loading="lazy" sizes="" width="1043" height="216"
            
              />
                {/* <img
                  className="hidden sm:flex !absolute h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"
                  alt=""
                />
              <img class="motion-reduce absolute sm:hidden h-full w-full object-cover" src="https://cecred.com/cdn/shop/files/Cecred_OurStory_MOBILE.jpg?v=1708294965&width=823" mobile-image="IiI=" aspect-ratio="4.828703703703703" mobile-aspect-ratio="" alt="" loading="lazy" sizes="" width="1043" height="216" /> */}
            </div>
      
                <div className="divide-y divide-gray-200">
                      <div className="pb-6">
                        {/* <div className="h-24 transparent sm:h-20 lg:h-28" /> */}
                        <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16">
                          <div>
                            <div className="-m-1 flex">
                              <div className="z-20 inline-flex overflow-hidden rounded-lg border-4 border-white">
                              <Image
                              className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                                src={profileImage || profileDefault}
                                width={200}
                                height={200}
                                alt='User'
                              />
                                {/* <img
                                  className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                                  src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                                  alt=""
                                /> */}
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 sm:ml-6 sm:flex-1">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{profileName ? profileName : "name & Last Name"}</h3>
                                <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                  <span className="sr-only">Online</span>
                                </span>
                              </div>
                              <p className="text-sm text-gray-500">@{profileEmail ? profileEmail : "customer@gmail.com"}</p>
                            </div>
                            <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                            <button
                              type="button"
                              className="inline-flex w-full flex-shrink-0 items-center justify-center bg-[var(--agedBlack)] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#625e5e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--agedBlack)] sm:flex-1"
                            >
                              Message
                            </button>
                            <button
                              type="button"
                              className="inline-flex w-full flex-1 items-center justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              Call
                            </button>
                              <div className="ml-3 inline-flex sm:ml-0">
                                <Menu as="div" className="relative inline-block text-left">
                                  <Menu.Button className="relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                    <span className="absolute -inset-1" />
                                    <span className="sr-only">Open options menu</span>
                                    <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                  </Menu.Button>
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      <div className="py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <Link
                                            href="/appointments"
                                              to="/appointments"
                                              className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                              )}
                                            >
                                            Appointments
                                            </Link>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <Link   href="orders"
                                              to="/orders"
                                              className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                              )}
                                            >
                                           Orders
                                            </Link>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <Link   href="/messages"
                                              to="/messages"
                                              className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                              )}
                                            >
                                           Message Massi
                                            </Link>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-5 sm:px-0 sm:py-0">
                        <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                          <div className="sm:flex sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Bio</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                              <p>
                                Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                                feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum
                                aenean arcu.
                              </p>
                            </dd>
                          </div>
                          <div className="sm:flex sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Location
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                              New York, NY, USA
                            </dd>
                          </div>
                          <div className="sm:flex sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Website
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                              ashleyporter.com
                            </dd>
                          </div>
                          <div className="sm:flex sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Birthday
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                              <time dateTime="1982-06-23">June 23, 1982</time>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                
                    <div className='md:w-3/4 md:pl-4'>
            <h2 className='xl:text-xl font-semibold mb-4'>Your producst</h2>
            {!loading && properties.length === 0 && (
              <p>You have no property listings</p>
            )}
            {loading ? (
              <Spinner loading={loading} />
            ) : (
              properties.map((property) => (
                <div key={property._id} className='mb-10'>
                  <Link href={`/properties/${property._id}`}>
                    <Image
                      className='h-32 w-full rounded-md object-cover'
                      src={`/images/properties/${property.images[0]}`}
                      alt=''
                      width={500}
                      height={100}
                      priority={true}
                    />
                  </Link>
                  <div className='mt-2'>
                    <p className='text-lg font-semibold'>{property.name}</p>
                    <p className='text-gray-600'>
                      Address: {property.location.street}{' '}
                      {property.location.city} {property.location.state}
                    </p>
                  </div>
                  <div className='mt-2'>
                    <Link
                      href={`/properties/${property._id}/edit`}
                      className='bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600'
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteProperty(property._id)}
                      className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600'
                      type='button'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
      
      
      
   
      </div>
  </div>
</div>

        <div className='flex flex-col md:flex-row'>
          <div className='mx-4 mt-10'>
            <div className='mb-4'>
              <Image
                className='h-24 w-24 z-10 object-cover object-center rounded-full ring-4 ring-blue-400 dark:ring-blue-500 sm:h-32 sm:w-32'
                src={profileImage || profileDefault}
                width={200}
                height={200}
                alt='User'
              />
            </div>
            <h2 className='text-xl sm:text-2xl mb-4'>
              <span className='font-bold block'>Name: </span> {profileName}
            </h2>
            <h2 className='text-xl sm:text-2xl'>
              <span className='font-bold block'>Email: </span> {profileEmail}
            </h2>
          </div>

   
        </div>
      </div>
    </div>
  </section>
  );
};
export default ProfilePage;




