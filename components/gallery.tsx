import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient()

export interface image {
    id: number,
    link: string,
    created_at: Date,
    description: string
}

export default function Gallery() {
  const [activities, setActivities] = useState<image[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      
        let { data: images, error } = await supabase.from('images').select('*')
        

      if (error) {
        console.error("Error fetching activities:", error);
      } else if (images) {
        setActivities(images);
      }
    };

    fetchActivities();
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((image, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <Image
                  src={`https://qtzuwjbthpskhdghhmkw.supabase.co/storage/v1/object/public/${image.link}`}
                  alt={image.description}
                  width={300}
                  height={200}
                  className="w-full rounded-lg mb-2 object-contain"
                />
                <h3 className="text-xl font-semibold">{image.description}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 
