import React from "react";

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "İçerik Bulunamadı",
  message = "Henüz bu bölüme ait içerik eklenmemiştir.",
  icon,
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {icon && (
        <div className="mb-6 text-gray-400">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-mainTitle font-bold text-textColor mb-4 text-center">
        {title}
      </h3>
      <p className="text-text-light text-center max-w-md mb-6">
        {message}
      </p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

