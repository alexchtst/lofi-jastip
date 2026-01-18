import { ChevronDown } from 'lucide-react';
import React from 'react';

export default function DashboardCccordion() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="w-full border border-gray-200 rounded-lg">
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center p-4 text-left"
            >
                <div>
                    <p className="font-semibold">Dolore ipsum sit nisn</p>
                    <p className="text-sm text-gray-600 font-semibold">
                        January, 10 2026
                    </p>
                </div>

                <span
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                >
                    <ChevronDown />
                </span>
            </button>

            {/* Content */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden px-4 pb-4">
                    <p>
                        Lorem aliqua irure laborum aliquip nostrud aliquip eiusmod eiusmod
                        dolore.
                    </p>
                </div>
            </div>
        </div>
    );
}
