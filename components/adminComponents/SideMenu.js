import {
  MenuAlt1Icon,
  ChartBarIcon,
  ShoppingBagIcon,
  CubeIcon,
  UserGroupIcon,
  MapPinIcon,
  ClipboardIcon,
  BriefcaseIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'Dashboard',
    icon: ChartBarIcon,
    href: '/admin/dashboard',
    current: true,
  },
  {
    name: 'Orders',
    icon: ShoppingBagIcon,
    href: '/admin/orders',
    current: false,
  },
  { name: 'Items', icon: CubeIcon, href: '/admin/items', current: false },
  { name: 'Users', icon: UserGroupIcon, href: '/admin/users', current: false },
  {
    name: 'Articles',
    icon: ClipboardIcon,
    href: '/admin/articles',
    current: false,
  },
  {
    name: 'Goals',
    icon: BriefcaseIcon,
    href: '/admin/donations',
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({ step }) {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <span className="rounded-lg font-medium text-2xl text-dblue">
          Welcome Admin
        </span>

        <ul className="mt-6 space-y-1 bg-dblue p-4 rounded-md">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="flex block rounded-lg bg-lgreen px-4 py-2 text-l text-white font-medium text-dblue"
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-cpink"
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
          {/* <li>
            <a
              key={item.name}
              href={item.href}
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              
            <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-green-300"
                aria-hidden="true"
              />
              {item.name}
            </a>
          </li> */}
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
