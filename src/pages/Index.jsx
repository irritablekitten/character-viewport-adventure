import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <div className="h-[98vh] flex flex-col bg-gray-100 p-2 sm:p-4 overflow-hidden">
      <div className="flex flex-col lg:flex-row flex-1 space-y-4 lg:space-y-0 lg:space-x-4 overflow-hidden">
        {/* Main viewport */}
        <div className="flex-1 relative">
          <img src="/placeholder.svg" alt="Game Background" className="w-full h-full object-cover rounded-lg" />
        </div>
        
        {/* Sidebar */}
        <Card className="w-full lg:w-64 flex flex-col overflow-hidden">
          {/* Character portrait */}
          <div className="p-2 flex-shrink-0">
            <img src="/placeholder.svg" alt="Character Portrait" className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full" />
          </div>
          
          {/* Character statistics */}
          <ScrollArea className="flex-grow p-2 space-y-2">
            <p>Health: 100/100</p>
            <p>Mana: 50/50</p>
            <p>Level: 1</p>
            <p>Experience: 0/100</p>
          </ScrollArea>
          
          {/* Command buttons */}
          <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 p-2 flex-shrink-0">
            {['Attack', 'Defend', 'Skill 1', 'Skill 2', 'Item', 'Run'].map((action) => (
              <Button key={action} variant="outline" className="w-full text-xs sm:text-sm">
                {action}
              </Button>
            ))}
          </div>
        </Card>
      </div>
      
      {/* Text log */}
      <Card className="mt-4 p-2 h-[15vh] max-h-32">
        <ScrollArea className="h-full">
          <p>Welcome to the game!</p>
          <p>Your adventure begins here...</p>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default Index;
