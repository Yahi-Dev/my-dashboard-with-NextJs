import Link from "next/link";

interface Props{
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  label?: string;
  href: string;
}


export const SimpleWidget = ({ title, subtitle, icon, label, href }: Props) => {
  return (
    <div className="bg-white shadow-xl p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col h-full">
        {label && (
          <div className="mb-2">
            <h2 className="font-bold text-gray-500 text-sm uppercase tracking-wider">
              {label}
            </h2>
          </div>
        )}
        
        <div className="my-4 flex-grow">
          <div className="flex flex-row items-center justify-start space-x-4">
            {icon && (
              <div id="icon" className="p-3 bg-blue-50 rounded-full text-blue-600">
                {icon}
              </div>
            )}
            <div className="text-left">
              <h4 className="text-3xl font-bold text-gray-800">{title}</h4>
              {subtitle && (
                <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <Link 
            href={href} 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-end gap-1 transition-colors"
          >
            Agregar Más
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}