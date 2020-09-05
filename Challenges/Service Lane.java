  static int[] serviceLane(int t,int[] width,int n, int[][] cases) {
              int[] res = new int[t];
         for(int i=0; i<t; i++)
        {     int start = cases[i][0];
              int end  = cases[i][1];
              int min = width[start];
              for(int b = start; b<= end; b++){
                 if(width[b]<min)
                 {
                     min = width[b];
                 }
              }
             res[i] = min;
        }
        return res;
    }
