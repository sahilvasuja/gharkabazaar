export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Collection Banner */}
      <div className="bg-gray-900 text-white text-center py-2 text-sm">
        Free shipping on orders over $50 | Easy returns
      </div>
      {children}
    </main>
  );
} 