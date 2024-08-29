import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      <div className="flex flex-1 space-x-4">
        {/* Main viewport */}
        <div className="flex-1 relative">
          <img src="/placeholder.svg" alt="Game Background" className="w-full h-full object-cover" />
        </div>
        
        {/* Sidebar */}
        <Card className="w-64 flex flex-col">
          {/* Character portrait */}
          <div className="p-2">
            <img src="/placeholder.svg" alt="Character Portrait" className="w-32 h-32 mx-auto rounded-full" />
          </div>
          
          {/* Character statistics */}
          <div className="flex-1 p-2 space-y-2">
            <p>Health: 100/100</p>
            <p>Mana: 50/50</p>
            <p>Level: 1</p>
            <p>Experience: 0/100</p>
          </div>
          
          {/* Command buttons */}
          <div className="grid grid-cols-2 gap-2 p-2">
            {['Attack', 'Defend', 'Skill 1', 'Skill 2', 'Item', 'Run'].map((action) => (
              <Button key={action} variant="outline" className="w-full">
                {action}
              </Button>
            ))}
          </div>
        </Card>
      </div>
      
      {/* Text log */}
      <Card className="mt-4 p-2 h-32 overflow-y-auto">
        <p>Welcome to the game!</p>
        <p>Your adventure begins here...</p>
      </Card>
    </div>
  );
};

export default Index;
