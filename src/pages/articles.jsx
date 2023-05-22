

import Navbar from "../components/navbar"

export default function Articles() {

    return (
        <div class="flex flex-col min-h-screen bg-keppel">
            <div>
                <Navbar />
            </div>

            <div class="flex-1 flex flex-col justify-end">
                <div class="grid grid-cols-3">
                    <div class="col-span-2 bg-black text-white ">
                        Put article cards here, replace bg
                    </div>
                    <div class="col-span-1 bg-green-500">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}