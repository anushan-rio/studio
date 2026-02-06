import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentCustomersData = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", avatar: "https://picsum.photos/seed/20/40/40" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", avatar: "https://picsum.photos/seed/21/40/40" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", avatar: "https://picsum.photos/seed/22/40/40" },
    { name: "William Kim", email: "will@email.com", amount: "+$99.00", avatar: "https://picsum.photos/seed/23/40/40" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", avatar: "https://picsum.photos/seed/24/40/40" },
]

export function RecentCustomers() {
  return (
    <div className="h-full w-full flex flex-col">
        <h3 className="text-lg font-semibold mb-4">New Customers</h3>
        <div className="space-y-6">
        {recentCustomersData.map((customer) => (
            <div key={customer.email} className="flex items-center">
                <Avatar className="h-9 w-9">
                <AvatarImage src={customer.avatar} alt="Avatar" />
                <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{customer.name}</p>
                <p className="text-sm text-muted-foreground">{customer.email}</p>
                </div>
                <div className="ml-auto font-medium">{customer.amount}</div>
            </div>
        ))}
        </div>
    </div>
  );
}
