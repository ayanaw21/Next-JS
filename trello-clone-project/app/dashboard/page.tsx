'use client'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { useBoards } from '@/lib/hooks/useBoards'
import { useUser } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'

const DashboardPage = () => {
    const {user} = useUser()
    const {createBoard} = useBoards()
    const handleCreateBoard = async ()=>{ 
        await createBoard({title:"New Board"})
    }
  return (
    <div className='min-h-screen bg-gray-50'> 
        <Navbar/>
        <main className='container mx-auto px-4 py-6 sm:py-8'>
            <div className='mb-6 sm:mb-8'>
                <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2' >Welcome back , {user?.firstName ?? user?.emailAddresses[0].emailAddress}! 👋 </h1>
                <p className='text-gray-600'>Here`s what`s happening with your dashboard today.</p>
                <Button className='w-full sm:w-auto cursor-pointer'>
                    <Plus className='h-4 w-4 mr-2' onClick={handleCreateBoard}/>
                    Create Board
                </Button>
            </div>
        </main>
    </div>
  )
}


export default DashboardPage