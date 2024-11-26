'use client'

import { image } from '@/components/gallery';
import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Image as ImageIcon, Plus } from 'lucide-react';
import Link from 'next/link';

export default function ListImages() {
    const [images, setImages] = useState<image[]>([]);
    const [selectedImage, setSelectedImage] = useState<image | null>(null);
    const supabase = createClient()

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase
                .from('images')
                .select('*');
            if (error) console.error('Error fetching images:', error);
            else setImages(data || []);
        };

        fetchImages();
    }, []);

    const deleteImage = async (id:number) => {
        const { error } = await supabase
            .from('images')
            .delete()
            .eq('id', id);
        if (error) console.error('Error deleting image:', error);
        else {
            setImages(images.filter(image => image.id !== id));
            setSelectedImage(null);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Image Gallery</h1>
                <div className="flex items-center space-x-4">
                    <p className="text-muted-foreground">{images.length} images</p>
                    <Link href="/upload-image">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add Image
                        </Button>
                    </Link>
                </div>
            </div>

            {images.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg">
                    <ImageIcon className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-muted-foreground">No images uploaded yet</p>
                    <Link href="/upload-image" className="mt-4">
                        <Button variant="outline">
                            <Plus className="mr-2 h-4 w-4" /> Upload First Image
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map(image => (
                        <Card 
                            key={image.id} 
                            className="hover:shadow-lg transition-shadow duration-300"
                        >
                            <CardHeader className="p-0">
                                <img 
                                    src={`https://qtzuwjbthpskhdghhmkw.supabase.co/storage/v1/object/public/${image.link}`} 
                                    alt={image.description} 
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-sm truncate">
                                    {image.description || 'No description'}
                                </CardTitle>
                            </CardContent>
                            <CardFooter className="p-4 pt-0 flex justify-end">
                                <Button 
                                    variant="destructive" 
                                    size="sm"
                                    onClick={() => deleteImage(image.id)}
                                >
                                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}