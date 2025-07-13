"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export default function ShareButton({ title, text, url }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          text,
          url,
        })
        .catch(() => {
          navigator.clipboard.writeText(url);
        });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
      className="inline-flex items-center gap-2"
    >
      <Share2 className="w-4 h-4" />
      Share
    </Button>
  );
}
