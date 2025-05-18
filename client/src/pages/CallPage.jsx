import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useAuthUser from '../hooks/useAuthUser';
import { useQuery } from '@tanstack/react-query';
import { getStreamToken } from '../lib/api';
import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
  User,
} from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';
const CallPage = () => {
  const {id:callId}=useParams(); 
  const [client,setClient]=useState(null);
  const [call,setCall]=useState(null);
  const [isConnecting,setIsConnecting]=useState(true);
  const{authUser,isLoading}=useAuthUser();
  const{data:tokenData}=useQuery({
    queryKey:["streamToken"],
    queryFn:getStreamToken,
    enabled:!!authUser
  });
  useEffect(()=>{
    const initCall=async ()=>{
      if(!tokenData.token||!authUser||!callId){
        return;
      }
      try {
        console.log("Initializing Stream video client...")
        
      } catch (error) {
        
      }
    }
    initCall();

  },[tokenData,authUser,callId])
  return (
    <div>
      Call page
    </div>
  )
}

export default CallPage
